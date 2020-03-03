const mongoose = require('mongoose')
const Schema = mongoose.Schema

const  navDataSchema = new Schema({
	index: Number,
	label: String,
	aData: Array
})
const  cardListSchema = new Schema({
	id: Number,
	imgUrl: String,
	label_0: Number,
	label_1: Number,
	label_2: Number,
	title: String,
	uploader: String,
	timeStamp: Number
})

module.exports = {
	navDataSchema,
	cardListSchema
}