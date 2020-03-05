const mongoose = require('mongoose')
const Schema = mongoose.Schema

const rotationUrl = new Schema({
	url: String
})

const  navDataSchema = new Schema({
	index: Number,
	label: String,
	aData: Array
})

const  cardsSchema = new Schema({
	id: String,
	articleUrl: String,
	isAllowedFrame: Boolean,
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
	cardsSchema,
	rotationUrl
}
