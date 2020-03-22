const router = require('koa-router')()
const Tool =require('../utils/index')
const Pj = require('../utils/project')

router.prefix('/compet')

const {
	users,
	competNavData,
	competProjects,
} = require('../model')

router.post('/uploadProject', async (ctx) => {
	console.log('uploadProject')
	if(!Tool.isLogin(ctx)) {
		ctx.body = {
			code: -1,
			msg: '未登录'
		}
		return ''
	}
	const userId = ctx.cookies.get('userId')
	const uploaderInfo = await users.findOne({userId}).select({userId: 1, name: 1, _id: 0})
	const body = ctx.request.body
	let aSelected = body.aSelected
	let { PName, PSummary, TName, TMembers} = body
	// 参数不存在，则拒绝
	if(!PName || !PSummary || !TName || !TMembers || !aSelected ) {
		ctx.body = {
			code: -1,
			msg: `${PName} ${PSummary} ${TName} ${TMembers}`
		}
		return ''
	}
	// json字符串转为对象等
	aSelected = JSON.parse(aSelected)
	TMembers = JSON.parse(TMembers)
	// 添加上传者于首位
	TMembers.unshift(uploaderInfo)
	let file = ctx.request.files.file
	try {
    
		const project = {
			PId: Tool.ceateId(),
			PName,
			PSummary,
			TName,
			TMembers,
			imgUrl: await Tool.uploadFile(ctx.request.files.file, 'images'),
			timeStamp: + body.timeStamp || + new Date(),
			label_0: aSelected[0],
			label_1: aSelected[1],
			show: true
		}
		const res = await competProjects.updateOne({PId: project.PId}, project, {upsert: true})
		console.log('res: ', res)
		ctx.body = {
			code: 200,
			project,
			body,
			res
		}

	} catch(err) {
		ctx.body = {
			code: -1,
			err,
			file
		}
	}
})

router.post('/getProjectCards', async(ctx) => {
	let aSelected= ctx.request.body.aSelected
	try {
		if(aSelected && aSelected.length >=2) {
			let query = {
				label_0: aSelected[0], 
				label_1: aSelected[1],
				show: true
			}
			// 默认按时间降序，新的优先
			let projectCards = await competProjects.find(query).sort({timeStamp: -1}).select({_id: 0})
			ctx.body = {
				code: 200,
				projectCards: projectCards || []
			}
		} else {
			ctx.body ={
				code: -1,
				msg: 'aSelected: '+ aSelected
			}
		}
	} catch(err) {
		ctx.body = {
			code: -1,
			err
		}
	}
})

router.get('/getNavData', async(ctx) => {
	try {
		const navData = await competNavData.find()
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

router.post('/getProject', async(ctx) => {
	try {
		const body = ctx.request.body
		const PId = body.PId
		const [common, specific] = await Promise.all([
			competProjects.findOne({PId, show: true}).select({_id:0, PName: 1, TName: 1}),
			Pj.getProject(PId)
		])
		const project = {
			...specific,
			PName: common.PName,
			TName: common.TName
		}
		ctx.body = {
			code: 200,
			project
		}
	} catch(err) {
		ctx.body = {
			code: -1,
			err
		}
	}
})

// Pj.getProject('128320832')

module.exports = router