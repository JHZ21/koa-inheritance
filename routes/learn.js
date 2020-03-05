const router = require('koa-router')()
const {uploadFile, compress, isAllowedFrame }  =require('../utils/index')

router.prefix('/learn')

const {
	learnNavData,
	learnCards,
	learnRotationUrl,
	learnContent
} = require('../model')


const updateLearnCards = async (josn1, json2) => {
	try {
		let res = await learnCards.updateMany(josn1, json2)
		console.log('success: ', res)
	} catch (err) {
		console.log('err: ', err)
	}
}
// updateLearnCards({}, {$unset: {__v: 0 }})
// updateLearnCards({}, {$set: {readVolume: 1 }})

// 接口保留，用于实现后台功能
async function updateLearnCardsImgUrl(imgUrl) {
	if(typeof imgUrl !== 'string') return
	try{
		let res = await learnCards.updateMany({}, {$set:{imgUrl}})
		console.log('success', res)
	}catch(err){
		console.log(err)
	}
}
// const _imgUrl = 'http://localhost:3000/images/05bd483854f98760.jpg'
// updateLearnCardsImgUrl(_imgUrl)

// LearnContent
// 更新与插入
const updateLearnContent = async (content) => {
	try {
		if( !content.comments ) {
			content.comments = []
		}
		if(content.id && content.articleUrl) {
			let res = await learnContent.updateMany({id:content.id}, content, {upsert: true})
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
	} catch(err) {
		return {
			code: -1,
			err
		}
	}
}

router.post('/getContent', async (ctx) => {
	try {
		const id = ctx.request.body.id
		console.log(id)
		if(id) {
			let res = await learnContent.findOne({id}).select({_id: 0, __v: 0})
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
	} catch(err) {
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
	} catch(err) {
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

router.post('/getCards', async(ctx) => {
	let aSelected= ctx.request.body.aSelected
	try {
		if(aSelected && aSelected.length >=2) {
			let query = {
				label_0: aSelected[0], 
				label_1: aSelected[1],
				label_2: aSelected[2]
			}
			// 默认按时间降序，新的优先
			let cards =  await learnCards.find(query).sort({timeStamp: -1}).select({_id: 0})
			let findRes = await learnCards.findOne({'label_0': 0})
			console.log('findRes: ', findRes)
      
			ctx.body = {
				code: 200,
				aSelected,
				cards
			}
		} else {
			ctx.body ={
				code: -1,
				msg: 'aSelect: '+ aSelected
			}
		}
	} catch(err) {
		ctx.body = {
			code: -1,
			err
		}
	}
})

router.post('/uploadCard', async (ctx) => {
	let body = ctx.request.body
	const aSelected = JSON.parse(body.aSelected)
	try {
		let card = {
			title : body.title,
			uploader : '暂放',  //TODO: 应涉及用户对象
			articleUrl: body.articleUrl,
			isAllowedFrame: await isAllowedFrame(body.articleUrl),
			id: compress(body.articleUrl),  // 以加密后的文章url加唯一标志
			readVolume: 0, // 阅读量
			timeStamp: body.timeStamp || new Date().getTime(), // 考虑，保留发送情况
			imgUrl: await uploadFile(ctx.request.files.file, 'images'),
			label_0: aSelected[0],
			label_1: aSelected[1],
			label_2: aSelected[2]
		}
		let res = await learnCards.update({id: card.id}, card, {upsert: true})
		const content  = {
			id: card.id,
			articleUrl: card.articleUrl,
			comments: []
		}
		let contentRes = await updateLearnContent(content)
		ctx.body = {
			code: 200,
			res,
			contentRes,
			card
		}
	} catch (err) {
		console.log(err)
		ctx.body = {
			code: -1,
			err
		}
	}
})

module.exports = router