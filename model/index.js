const mongoose = require('mongoose')
const learn = require('../schemas/learnSchema')

const learnNavData = mongoose.model('learnNavData', learn.navDataSchema, 'learnNavData')
const learnCards = mongoose.model('learnCardList', learn.cardsSchema, 'learnCardList')
const learnRotationUrl = mongoose.model('learnRotationUrl', learn.rotationUrl, 'learnRotationUrl')

module.exports = {
	learnNavData,
	learnCards,
	learnRotationUrl
}
