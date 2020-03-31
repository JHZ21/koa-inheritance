const Tool =require('./index')

const {
	users,
	projectContent,
	projectTeam,
	projectSteps
} = require('../model')

// TODO: 待写...
async function isValidUpdateContentRequest(userId, contents) {
	return true
}

async function isValidUpdatePNameRequest(PId, userId) {
	return true
}
// TODO: 删除的直接删除，先让数据库清晰
async function updatePjContent(content)  {
	console.log('updatePContentSummary')
	if(!(content.PId && typeof(content.index) === 'number' && content.title && content.content)) {
		console.log('content 属性不全', content)
		return false
	}
	if(content.show === undefined) {
		content.show = true
	}
	if(Tool.isUndef(content.time)) {
		content.time = Date.now()
	}
	const { PId, time } = content
	try {
		// PId + time 为主键
		const res = await projectContent.updateOne({ PId, time }, content, {upsert: true})
		return res
	} catch(err) {
		console.log('err: ',err)
		return false
	}
}

async function getPjContent (PId) {
	console.log('getPjContent')
	try {
		const content = await projectContent.find({PId, show: true}).select({_id: 0, show: 0}).sort({index: 1})
		// console.log('content: ', content)
		return content
	} catch(err) {
		console.log('err: ', err)
	}
}
async function updatePjMember(member) {
	console.log('updatePjMember ')
	if(!(member.PId 
    &&member.userId 
    &&typeof(member.index) === 'number' 
    && member.introduce 
    && member.contribution
	)) {
		console.log('member 属性不全', member)
		return false
	}
	if(member.show === undefined) {
		member.show = true
	}
	try {
		const res = await projectTeam.updateOne({PId: member.PId, index: member.index}, member, {upsert: true})
		return res
	} catch(err) {
		console.log('err: ',err)
		return false
	}
}
async function getPjTeam (PId) {
	console.log('getPjTeam')
	try {
		const team = await projectTeam.find({PId, show: true}).select({_id: 0, show: 0}).sort({index: 1})
		const memberInfos = await Promise.all(team.map(temmber => {
			return  users.findOne({userId: temmber.userId}).select({headUrl: 1, _id: 0})
		}))
		// 添加headUrl
		team.forEach((members,index) => {
			members.headUrl = memberInfos[index].headUrl
		})
		return team
	} catch(err) {
		console.log('err: ', err)
	}
}

async function getPjSteps (PId) {
	console.log('getPjSteps')
	try {
		const stepsList = await projectSteps.find({PId, show: true}).select({_id: 0, show: 0}).sort({index: 1})
		return stepsList
	} catch(err) {
		console.log('err: ', err)
	}
}

async function getProject (PId) {
	console.log('getProject')
	try {
		const [contents, team, stepsList] = await Promise.all([
			getPjContent(PId),
			getPjTeam(PId),
			getPjSteps(PId)
		])
		const project = {
			contents,
			team,
			stepsList
		}
		// console.log('project: ', project)
		return project
	} catch(err) {
		console.log('err: ', err)
	}
}
module.exports = {
	getPjContent,
	getPjTeam,
	getPjSteps,
	getProject,
	updatePjMember,
	updatePjContent,
	isValidUpdateContentRequest,
	isValidUpdatePNameRequest
}