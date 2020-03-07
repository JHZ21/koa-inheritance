const router = require('koa-router')()
const {validAccount, ceateUserId, compress }  =require('../utils/index')

const {
	users
} = require('../model') 

router.prefix('/user')

router.post('/register', async (ctx) => {
	const body = ctx.request.body
	try {
		if(body.account && body.pw && validAccount(body.account)) {
			const findRes = await users.find({account: body.account})
			if(findRes.length > 0) {
				ctx.body = {
					code: -1,
					res: 'account 已经存在'
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

router.get('/bar', function (ctx) {
	ctx.body = 'this is a users/bar response'
})

module.exports = router
