const Tool =require('./index')

const {
	users,
	projectContent,
	projectTeam,
	projectSteps
} = require('../model')

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
		const steps = await projectSteps.find({PId, show: true}).select({_id: 0, show: 0}).sort({index: 1})
		return steps
	} catch(err) {
		console.log('err: ', err)
	}
}

const getProject = async (PId) => {
	console.log('getProject')
	try {
		const [content, team, steps] = await Promise.all([
			getPjContent(PId),
			getPjTeam(PId),
			getPjSteps(PId)
		])
		const project = {
			content,
			team,
			steps
		}
		console.log('project: ', project)
		return project
	} catch(err) {
		console.log('err: ', err)
	}
}
module.exports = {
	getPjContent,
	getPjTeam,
	getPjSteps,
	getProject
}