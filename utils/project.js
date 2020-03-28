const Tool =require('./index')

const {
	users,
	projectContent,
	projectTeam,
	projectSteps
} = require('../model')

async function updatePjContent(content)  {
	console.log('updatePContentSummary')
	if(!(content.PId && typeof(content.index) === 'number' && content.title && content.content)) {
		console.log('content 属性不全', content)
		return false
	}
	if(content.show === undefined) {
		content.show = true
	}
	try {
		const res = await projectContent.updateOne({PId: content.PId, index: content.index}, content, {upsert: true})
		return res
	} catch(err) {
		console.log('err: ',err)
		return false
	}
}

const getPjContent = async (PId) => {
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
const getPjTeam = async (PId) => {
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

const getPjSteps = async (PId) => {
	console.log('getPjSteps')
	try {
		const stepsList = await projectSteps.find({PId, show: true}).select({_id: 0, show: 0}).sort({index: 1})
		return stepsList
	} catch(err) {
		console.log('err: ', err)
	}
}

const getProject = async (PId) => {
	console.log('getProject')
	try {
		const [content, team, stepsList] = await Promise.all([
			getPjContent(PId),
			getPjTeam(PId),
			getPjSteps(PId)
		])
		const project = {
			content,
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
	updatePjContent,
	updatePjMember
}