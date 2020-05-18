const Koa = require('koa')
const app = new Koa()
const json = require('koa-json')
const onerror = require('koa-onerror')
const bodyparser = require('koa-bodyparser')
const logger = require('koa-logger')
const cors = require('koa-cors')
const koaBody = require('koa-body')
const mongoConfig = require('./config/mongo')
const fs = require('fs')
const sslify = require('koa-sslify').default



app.use(sslify({port: 4433})) // 强制转为https 端口设为4433

app.use(cors({})) // cors 允许跨域


mongoConfig.connect()

// error handler
onerror(app)

app.use(koaBody(
	{
		multipart: true,
		formidable: {
			maxFileSize: '2mb'  
		}
	}))

// middlewares
app.use(
	bodyparser({
		multipart: true,
		formLimit: '10mb',
		jsonLimit: '50mb',
		textLimit: '10mb',
		enableTypes: ['json', 'form', 'text']
	})
)
app.use(json())
app.use(logger())


app.use(require('koa-static')(__dirname + '/public', {
	maxage: 31536000000 // 强制缓存一年 单位ms
}))


// logger
app.use(async (ctx, next) => {
	const start = new Date()
	await next()
	const ms = new Date() - start
	console.log(`${ctx.method} ${ctx.url} - ${ms}ms`)
})

// routes
fs.readdirSync('./routes').forEach(route => {
	let api = require(`./routes/${route}`)
	app.use(api.routes(), api.allowedMethods())
})

// error-handling
app.on('error', (err, ctx) => {
	console.error('server error', err, ctx)
})

module.exports = app