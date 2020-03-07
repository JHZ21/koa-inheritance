const mongoose = require('mongoose')
const learn = require('../schemas/learnSchema')
const user = require('../schemas/userSchema')

// Learn
const learnNavData = mongoose.model('learnNavData', learn.navDataSchema, 'learnNavData')
const learnCards = mongoose.model('learnCardList', learn.cardsSchema, 'learnCardList')
const learnRotationUrl = mongoose.model('learnRotationUrl', learn.rotationUrlSchema, 'learnRotationUrl')
const learnContent = mongoose.model('learnContent', learn.contentSchema, 'learnContent')

// user
const users = mongoose.model('users', user.userSchema, 'users')

module.exports = {
	learnNavData,
	learnCards,
	learnRotationUrl,
	learnContent,
	users
}
