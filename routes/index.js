const router = require('koa-router')()
const {uploadFile }  =require('../utils/index')

router.get('/', async (ctx) => {
	// await ctx.render('index', {
	//   title: 'Hello Koa 2!'
	// })
	ctx.body = 'Hello Koa 2!'
})

router.get('/string', async (ctx) => {
	ctx.body = 'koa2 string'
})

router.get('/json', async (ctx) => {
	ctx.body = {
		title: 'koa2 json'
	}
})

router.post('/uploadImage', async (ctx) => {
	try {
		const imgUrl = await uploadFile(ctx.request.files.file, 'images')
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

router.post('/uploadImages', async (ctx) => {
	try {
		const files = ctx.request.files.files
		const filesName = Object.keys(files)
		const imgUrls = []
		for(let i =0; i < filesName.length; i++) {
			imgUrls.push(await uploadFile(files[filesName[i]], 'images'))
		}
		ctx.body ={
			code: 200,
			imgUrls
		}
	} catch(err) {
		ctx.body = {
			code: -1,
			err
		}
	}
})



module.exports = router
