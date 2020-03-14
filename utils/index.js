const fs = require('fs')
const path = require('path')
const md5 = require('md5')
const axios = require('axios')
const crypto = require('crypto')


const nextDayTime = (time) => {
	const nextDayDate = new Date(new Date().getTime() + 24*3600*1000)
	const nextDayTime = nextDayDate.getTime()
	let resTime = nextDayTime
	if(!time) return resTime
	time = +time
	// time 若已为下一天，则留用
	if(sameDay(nextDayDate, new Date(time))){
		resTime = time
	}
	return resTime
}

const sameDay = (now, date) => {
	return (now.getFullYear() === date.getFullYear()
  && now.getMonth() === date.getMonth()
  && now.getDate() ===date.getDate())
}
const isLogin = (ctx) => {
	const {cookies} = ctx
	const userId = cookies.get('userId')
	const userIdSign = cookies.get('userIdSign')
	return crypto16(userId) === userIdSign
}

const crypto16 = (obj) => {
	if(!obj) return ''
	const key = 'crypto16#qw-@'
	const sign = crypto.createHmac('sha256',key)
	sign.update(JSON.stringify(obj))
	return sign.digest('hex') // 返回格式16位
}
const ceateUserId = () => {
	//(注册时间戳字符穿+4位随机数)压缩为16位
	const timeStr = '' + new Date().getTime() + Math.floor(Math.random() * 1e4)
	return compress(timeStr)
}
const validAccount = (value) => {
	const iphoneReg = /^1\d{10}$/
	return iphoneReg.test(value)
}

const isAllowedFrame = async (url) =>  {
	try {
		const res = await axios.get(url)
		return !res.headers['x-frame-options']
	} catch(err) {
		if(err.response && err.response.headers){
			return !err.response.headers['x-frame-options']
		}
		console.log('err', err)
		return false
	}
}

//压缩： 取加密后32位字符的中间16位
const compress = (val) => (md5(val)).slice(8, 24)


// file：文件对象， dir: public下的文件夹
const uploadFile =  (file, dir) => {
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
	return `${dir}/${newFileName}`
}


module.exports = {
	nextDayTime,
	crypto16,
	isLogin,
	ceateUserId,
	validAccount,
	isAllowedFrame,
	compress,
	uploadFile,
	sameDay
}