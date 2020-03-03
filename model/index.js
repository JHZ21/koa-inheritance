const mongoose = require('mongoose')
const learn = require('../schemas/learnSchema')

const learnNavData = mongoose.model('learnNavData', learn.navDataSchema, 'learnNavData')
const learnCardList = mongoose.model('learnCardList', learn.cardListSchema, 'learnCardList')

module.exports = {
	learnNavData,
	learnCardList
}
