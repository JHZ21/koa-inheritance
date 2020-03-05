const mongoose = require('mongoose').set('debug', false) // debug:true 打印数据库操作
const config = require('./index.js')
const options = {
	autoReconnect: true,
	useUnifiedTopology: true ,
	useNewUrlParser: true 
}


module.exports = {
	connect: () => {
		mongoose.connect(config.mongodbUrl, options)
		let db = mongoose.connection
		db.on('error', () =>  console.log('链接数据库错误'))
		db.on('open', () =>  console.log('链接数据库成功'))
	}
}