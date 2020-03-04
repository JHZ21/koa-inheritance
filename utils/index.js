const fs = require('fs')
const path = require('path')
const config = require('../config/index')
const md5 = require('md5')

exports.md5 = (val) => md5(val)

exports.uploadFile =  (ctx, dir) => {
	const file = ctx.request.files.file
	const suffix = file.name.split('.').pop() // 后缀名
	// 创建可读流
	const reader = fs.createReadStream(file.path)
	const fileObj = fs.readFileSync(file.path)
	// let newFileName = '' + new Date().getTime() + Math.floor(Math.random() * 1e4) + '.'+suffix
	// 根据文件内容加密
	let newFileName = '' + md5(fileObj) + '.' + suffix
	let newFilePath = path.join(__dirname, `../public/${dir}`, newFileName)
	const fileDir = path.join(__dirname, `../public/${dir}`)
	if (!fs.existsSync(fileDir)) {
		fs.mkdirSync(fileDir, err => {
			console.log(err)
			console.log('创建失败')
		})
	}
	// 创建写入流
	const upStream = fs.createWriteStream(newFilePath)
	reader.pipe(upStream)
	return `${config.urlBase}${dir}/${newFileName}`
}