const mongoose = require('mongoose')
const user = require('../schemas/userSchema')
const learn = require('../schemas/learnSchema')
const compet = require('../schemas/competSchema')

// user
const users = mongoose.model('users', user.userSchema, 'users')

// Learn
const learnNavData = mongoose.model('learnNavData', learn.navDataSchema, 'learnNavData')
const learnCards = mongoose.model('learnCardList', learn.cardsSchema, 'learnCardList')
const learnRotationUrl = mongoose.model('learnRotationUrl', learn.rotationUrlSchema, 'learnRotationUrl')
const learnContent = mongoose.model('learnContent', learn.contentSchema, 'learnContent')

// compet
const competNavData = mongoose.model('competNavData',compet.navDataSchema, 'competNavData' )
const competProjects = mongoose.model('competProjects', compet.projectsSchema, 'competProjects')
// project
const projectContent = mongoose.model('projectContent', compet.projectContentSchema, 'projectContent')
const projectTeam = mongoose.model('projectTeam', compet.projectTeamSchema, 'projectTeam')
const projectSteps = mongoose.model('projectSteps', compet.projectStepsSchema, 'projectSteps')

module.exports = {
	users,
	learnNavData,
	learnCards,
	learnRotationUrl,
	learnContent,
	competNavData,
	competProjects,
	projectContent,
	projectTeam,
	projectSteps
}
