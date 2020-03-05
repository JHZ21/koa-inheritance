const fs = require('fs')
const path = require('path')
const config = require('../config/index')
const md5 = require('md5')
const axios = require('axios')

exports.isAllowedFrame = async (url) =>  {
	try {
		const res = await axios.get(url)
		return !res.headers['x-frame-options']
	} catch(err) {
		console.log(err)
	}
}

//压缩： 取加密后32位字符的中间16位
const compress = (val) => (md5(val)).slice(8, 24)
exports.compress = compress

// file：文件对象， dir: public下的文件夹
exports.uploadFile =  (file, dir) => {
	// const file = ctx.request.files.file
	const suffix = file.name.split('.').pop() // 后缀名
	// 创建可读流
	const reader = fs.createReadStream(file.path)
	const fileObj = fs.readFileSync(file.path)
	// let newFileName = '' + new Date().getTime() + Math.floor(Math.random() * 1e4) + '.'+suffix
	// 根据文件内容加密
	let newFileName = '' + compress(fileObj) + '.' + suffix
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