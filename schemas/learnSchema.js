const mongoose = require('mongoose')
const Schema = mongoose.Schema

const rotationUrlSchema = new Schema({
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
	readVolume: Number,
	imgUrl: String,
	label_0: Number,
	label_1: Number,
	label_2: Number,
	title: String,
	uploader: String,
	timeStamp: Number
})

const contentSchema = new Schema({
	id: String,
	articleUrl: String,
	comments: Array
})

module.exports = {
	navDataSchema,
	cardsSchema,
	rotationUrlSchema,
	contentSchema
}
