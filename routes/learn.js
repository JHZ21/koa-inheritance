const router = require('koa-router')()
const { uploadFile, compress, isAllowedFrame, isLogin, crypto16, isBeforeDay, nextDayTime } = require('../utils/index')

router.prefix('/learn')

const {
	learnNavData,
	learnCards,
	learnRotationUrl,
	learnContent,
	users
} = require('../model')


// learn
const updateLearnCards = async (josn1, json2) => {
	try {
		let res = await learnCards.updateMany(josn1, json2)
		console.log('success: ', res)
	} catch (err) {
		console.log('err: ', err)
	}
}

// 接口保留，用于实现后台功能
async function updateLearnCardsImgUrl(imgUrl) {
	if (typeof imgUrl !== 'string') return
	try {
		let res = await learnCards.updateMany({}, { $set: { imgUrl } })
		console.log('success', res)
	} catch (err) {
		console.log(err)
	}
}
// const _imgUrl = 'http://localhost:3000/images/05bd483854f98760.jpg'
// updateLearnCardsImgUrl(_imgUrl)

// LearnContent
// 更新与插入
const updateLearnContent = async (content) => {
	try {
		if (!content.comments) {
			content.comments = []
		}
		if (content.id && content.articleUrl) {
			let res = await learnContent.updateMany({ id: content.id }, content, { upsert: true })
			return {
				code: 200,
				content: res
			}
		} else {
			return {
				code: -1,
				msg: `parameter id is ${content.id}`
			}
		}
	} catch (err) {
		return {
			code: -1,
			err
		}
	}
}

router.post('/addReadVolume', async (ctx) => {
	try {
		// 要求已登陆
		if (!isLogin(ctx)) {
			ctx.body = {
				code: -1,
				msg: '未登陆'
			}
			return ''
		}
		const { body } = ctx.request
		const now = new Date()
		const dailyRead = body.dailyRead
		const newRead = body.newRead

		if (dailyRead
      && dailyRead.timeStamp
      && body.sign
      && newRead
      && crypto16(body.dailyRead) === body.sign
		) {
			// 信息完备且合法
			// 如有是newRead 为[],并且timeStamp 不是以前天的，则拒绝
			if (newRead.length < 1 && !isBeforeDay(dailyRead.timeStamp)) {
				// 未有新阅读文章
				ctx.body = {
					code: -1,
					msg: `newRead:${newRead}`
				}
				return ''
			}

			if (dailyRead.timeStamp <= +now) {
				const resArr = []
				let modifiedNum = 0
				// 遍历 阅读+1
				const addedRead = []
				// 若是今天以前的， 则重设dailyRead
				if (isBeforeDay(dailyRead.timeStamp)) {
					dailyRead.oldRead = []
					dailyRead.timeStamp = +now
				}
				for (let key = 0; key < newRead.length; key++) {
					const newArticleId = newRead[key]
					if (!dailyRead.oldRead.includes(newArticleId)) {
						console.log('will add +1', newArticleId)
						const res = await learnCards.updateOne({ id: newArticleId }, { $inc: { readVolume: +1 } })
						if (res.nModified) {
							modifiedNum++
							// 成功修改后,添加到addedRead
							addedRead.push(newArticleId)
						}
						resArr.push(res)
					}
				}
				dailyRead.oldRead.push(...addedRead)

				if (modifiedNum === 0) {
					// 数据库没有更新
					ctx.body = {
						code: -1,
						dailyRead,
						sign: crypto16(dailyRead),
						newRead: [],
						resArr
					}
				} else {
					// 数据库有更新
					ctx.body = {
						code: 200,
						dailyRead,
						sign: crypto16(dailyRead),
						newRead: [],
						resArr
					}
				}

			} else {
				// 未到允许时间
				ctx.body = {
					code: -1,
					msg: '未到允许时间'
				}
			}

		} else {
			// 信息不完备或者非法
			// 信息被篡改或者第一次访问,设置新的dailyRead
			const newDailyRead = {
				oldRead: [],
				timeStamp: nextDayTime()
			}
			// timeStamp 若已为下一天，则留用旧值
			if (dailyRead && dailyRead.timeStamp) {
				newDailyRead.timeStamp = nextDayTime(dailyRead.timeStamp)
			}
			ctx.body = {
				code: -1,
				dailyRead: newDailyRead,
				sign: crypto16(newDailyRead),
				newRead: newRead || [],
				msg: '设置新的dailyRead'
			}
		}
	} catch (err) {
		ctx.body = {
			code: -1,
			msg: '报错',
			err
		}
	}
})

router.post('/getContent', async (ctx) => {
	try {
		const id = ctx.request.body.id
		console.log(id)
		if (id) {
			let res = await learnContent.findOne({ id }).select({ _id: 0, __v: 0 })
			ctx.body = {
				code: 200,
				content: res
			}
		} else {
			ctx.body = {
				code: -1,
				msg: `parameter id is ${id}`
			}
		}
	} catch (err) {
		ctx.body = {
			code: -1,
			err
		}
		console.log('err: ', err)
	}
})

// Learn
router.get('/rotationUrl', async (ctx) => {
	try {
		let data = await learnRotationUrl.find({})
		let rotationUrl = data.map(obj => obj.url)
		ctx.body = {
			code: 200,
			rotationUrl
		}
	} catch (err) {
		ctx.body = {
			code: -1,
			err
		}
	}
})

router.get('/getNavData', async (ctx) => {
	// let parasm = {}
	try {
		const navData = await learnNavData.find()
		ctx.body = {
			code: 200,
			navData
		}
	} catch (err) {
		ctx.body = {
			code: -1,
			msg: err
		}
	}
})

router.post('/getCards', async (ctx) => {
	let aSelected = ctx.request.body.aSelected
	try {
		if (aSelected && aSelected.length >= 2) {
			let query = {
				label_0: aSelected[0],
				label_1: aSelected[1],
				label_2: aSelected[2],
				show: true
			}
			// 默认按时间降序，新的优先
			let cards = await learnCards.find(query).sort({ timeStamp: -1 }).select({ _id: 0 })
			ctx.body = {
				code: 200,
				// aSelected,
				cards
			}
		} else {
			ctx.body = {
				code: -1,
				msg: 'aSelect: ' + aSelected
			}
		}
	} catch (err) {
		ctx.body = {
			code: -1,
			err
		}
	}
})

router.post('/uploadCard', async (ctx) => {
	if (!isLogin(ctx)) {
		return ctx.body = {
			code: -1,
			msg: '未登录'
		}
	}
	const userId = ctx.cookies.get('userId')
	const userRes = await users.findOne({ userId }).select({ name: 1 })
	let body = ctx.request.body
	const aSelected = JSON.parse(body.aSelected)
  
	try {
		const articleId = compress(body.articleUrl)
		const isExit = await learnCards.findOne({id: articleId})
		console.log('isExit: ', isExit)
		if(isExit) {
			return ctx.body = {
				code: -1,
				msg: '文章已经存在'
			}
		}
		let card = {
			title: body.title,
			uploader: {
				name: userRes.name,
				userId
			},  //TODO: 应涉及用户对象
			articleUrl: body.articleUrl,
			isAllowedFrame: await isAllowedFrame(body.articleUrl),
			id: articleId,  // 以加密后的文章url加唯一标志
			readVolume: 0, // 阅读量
			timeStamp: body.timeStamp || new Date().getTime(), // 考虑，保留发送情况
			imgUrl: await uploadFile(ctx.request.files.file, 'images'),
			label_0: aSelected[0],
			label_1: aSelected[1],
			label_2: aSelected[2],
			show: true
		}
		let res = await learnCards.updateOne({ id: card.id }, card, { upsert: true })
		const content = {
			id: card.id,
			articleUrl: card.articleUrl,
			comments: []
		}
		let contentRes = await updateLearnContent(content)
		return ctx.body = {
			code: 200,
			res,
			contentRes,
			card
		}
	} catch (err) {
		console.log(err)
		return ctx.body = {
			code: -1,
			err
		}
	}
})

router.post('/deleteCard', async (ctx) => {
	if (!isLogin(ctx)) {
		ctx.body = {
			code: -1,
			msg: '未登录'
		}
		return ''
	}
	const userId = ctx.cookies.get('userId')
	let { articleId } = ctx.request.body
	// TODO: 判断userId 是否有权限对 articleId 进行操作的权限
	try {
		let res = await learnCards.deleteOne({ id: articleId })
		if (res && res.n > 0) {
			ctx.body = {
				code: 200,
				res
			}
		} else {
			ctx.body = {
				code: -1,
				res: 'not found'
			}
		}

	} catch (err) {
		ctx.body = {
			code: -1,
			err
		}
	}
})

router.post('/transferCard', async (ctx) => {
	if (!isLogin(ctx)) {
		ctx.body = {
			code: -1,
			msg: '未登录'
		}
		return ''
	}
	const userId = ctx.cookies.get('userId')
	let { articleId, aSelected, newASelected, title } = ctx.request.body
	try {
		//TODO: articleId, aSelected, newASelected 是否有权限
		let changed = !aSelected.every((item, index) => item === newASelected[index])
		if (!changed) {
			ctx.body = {
				code: -1,
				msg: 'aSelected 未改变'
			}
		}
		let changedObj = Object.create(null)
		newASelected.forEach((item,index) => {
			changedObj[`label_${index}`] = item
		})
		title && (changedObj.title = title)
		let res = await learnCards.updateOne({id: articleId}, {$set:changedObj})
		if(res && res.n >0) {
			ctx.body = {
				code: 200,
				res
			} 
		} else {
			ctx.body = {
				code: -1,
				msg: '修改失败'
			}
		}
	} catch(err) {
		ctx.body = {
			code: -1,
			err
		}
	}
})

module.exports = router