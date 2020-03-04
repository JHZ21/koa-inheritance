const router = require('koa-router')()
const {uploadFile, md5 }  =require('../utils/index')

router.prefix('/learn')

const {
	learnNavData,
	learnCards,
	learnRotationUrl
} = require('../model')

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

router.post('/image', async (ctx) => {
	try {
		const imgUrl = await uploadFile(ctx, 'images')
		ctx.body ={
			code: 200,
			imgUrl,
			file: ctx.request.files.file
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
			let cards =  await learnCards.find(query).sort({timeStamp: -1}).select({_id: 0, __v:0})
      
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
// 接口保留，用于实现后台功能
async  function updateImgUrl() {
	const imgUrl = 'http://localhost:3000/images/30de0228f2d1c2861023c4460b4c3062.jpg'
	try{
		let res = await learnCards.updateMany({}, {$set:{imgUrl}})
		console.log('success', res)
	}catch(err){
		console.log(err)
	}
}
// updateImgUrl()

router.post('/uploadCards', async (ctx) => {
	let body = ctx.request.body
	const aSelected = JSON.parse(body.aSelected)
	try {
		let card = {
			title : body.title,
			uploader : '暂放',  //TODO: 应涉及用户对象
			id: md5(body.articleUrl),  // 以加密后的文章url加唯一标志
			timeStamp: body.timeStamp || new Date().getTime(), // 考虑，保留发送情况
			imgUrl: await uploadFile(ctx, 'images'),
			label_0: aSelected[0],
			label_1: aSelected[1],
			label_2: aSelected[2]
		}
		let res = await learnCards.insertMany(card)
    
		ctx.body = {
			code: 200,
			res,
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