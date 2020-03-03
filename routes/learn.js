const router = require('koa-router')()
const {uploadFile }  =require('../utils/index')

router.prefix('/learn')

const {
	learnNavData,
	learnCardList
} = require('../model')

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

router.get('/navData', async (ctx) => {
	// let parasm = {}
	try {
		const data = await learnNavData.find()
		ctx.body = {
			code: 200,
			data
		}
	} catch (err) {
		ctx.body = {
			code: -1,
			msg: err
		}
	}
})

router.post('/getCards', async(ctx) => {
	let aSelected= ctx.request.query.aSelected
	aSelected = JSON.parse(aSelected)
	console.log(typeof aSelected)
	console.log( aSelected)
	try {
		if(aSelected && aSelected.length >=2) {
			let query = {
				label_0: aSelected[0], 
				label_1: aSelected[1],
				label_2: aSelected[2]
			}
			const cards =  await learnCardList.find(query).sort({timeStamp: 1})
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