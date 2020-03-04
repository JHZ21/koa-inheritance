const router = require('koa-router')()
const {uploadFile }  =require('../utils/index')

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
			imgUrl
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
			let cards =  await learnCards.find(query).sort({timeStamp: 1}).select({_id: 0, __v:0})
      
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
	const imgUrl = 'http://localhost:3000/images/15832553795062087.jpg'
	try{
		let res = await learnCards.updateMany({}, {$set:{imgUrl}})
		console.log('success', res)
	}catch(err){
		console.log(err)
	}
}
// updateImgUrl()
// 用于更新原始数据库
// router.post('/uploadCards', async (ctx) => {
// 	let allCardList = ctx.request.body.allCardList
// 	try {
// 		await learnCardList.insertMany(allCardList)
// 		console.log('success')
// 		ctx.body = {
// 			code: 200
// 		}
// 	} catch (err) {
// 		console.log(err)
// 		ctx.body = {
// 			code: -1,
// 			err
// 		}
// 	}
// })

module.exports = router