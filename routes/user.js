const router = require('koa-router')()
const {validAccount, ceateUserId, compress }  =require('../utils/index')

const {
	users
} = require('../model') 

router.prefix('/user')

const userInfoSelect  = {
	_id: 0, 
	pw: 0,
	__v:0,
	account: 0
}


router.post('/register', async (ctx) => {
	const body = ctx.request.body
	try {
		if(body.account && body.pw && validAccount(body.account)) {
			const findRes = await users.find({account: body.account})
			// 账号是否已经注册
			if(findRes.length > 0) {
				ctx.body = {
					code: -1,
					msg: 'account 已经存在'
				}
			} else {
				let user = {
					userId: ceateUserId(),
					account: body.account,
					name: `用户${ (''+body.account).slice(-4)}`,
					pw: compress(body.pw),
					headUrl: 'http://localhost:3000/images/21c1c757d6e124f4.gif',
					roles: []
				}
				await users.insertMany(user)
				ctx.body = {
					code: 200,
					msg: 'account 注册成功'
				}
			}
		} else {
			ctx.body={
				code: -1,
				msg: '参数错误',
				body
			}
		}
	} catch(err) {
		ctx.body ={
			code: -1,
			err,
			body
		}
	}
})

router.post('/login', async (ctx) => {
	try {
		const body = ctx.request.body
		let pwEqual = false
		if(body && validAccount(body.account) && body.pw ){
			const res = await users.find({account: body.account})
			if(res && res[0]) {
				pwEqual = compress(body.pw) === res[0].pw
			}
			if(pwEqual) {
				const userRes= await users.find({account: body.account}).select(userInfoSelect)
				const userInfo = userRes[0]
				ctx.cookies.set(
					'userId', userInfo.userId,
					{
						maxAge: 30 * 60 * 1000 , // 30分钟
						httpOnly: true,
						overwirte: false
					}
				)
				ctx.body = {
					code: 200,
					msg: '登陆成功'
				}
			} else {
				ctx.body = {
					code: -1,
					msg: '登陆失败'
				}
			}
		}else {
			ctx.body ={
				code: -1,
				msg: '登录失败',
			}
		}
	} catch(err) {
		ctx.body ={
			code: -1,
			msg: '登录失败',
			err
		}
	}
})

// TODO: cookie userId 有效，是否应该返回新的cookie
router.post('/getUserInfo', async (ctx) => {
	try {
		const userId = ctx.cookies.get('userId')
		console.log('userId: ', userId)
		if(userId) {
			const userRes = await users.findOne({userId}).select(userInfoSelect)
			if(userRes) {
				const userInfo = userRes
				// 返回新有效时间cookie
				ctx.cookies.set(
					'userId', userId,
					{
						maxAge: 30 * 60 * 1000 , // 30分钟
						httpOnly: true,
						overwirte: false
					}
				)
				ctx.body ={
					code: 200,
					userInfo
				}
			} else {
				ctx.body = {
					code: -1
				}
			}
		}else {
			ctx.body = {
				code: -1
			}
		}
	} catch(err) {
		ctx.body = {
			code: -1
		}
	}
})

router.get('/signOut', (ctx) => {
	ctx.cookies.set(
		'userId', '',
		{
			httpOnly: true,
			overwirte: false
		}
	)
	ctx.body = {
		code: 200
	}
})

module.exports = router
