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
	title: String,
	uploader: {
		name: String,
		userId: String
	},
	isAllowedFrame: Boolean,
	imgUrl: String,
	readVolume: Number,
	label_0: Number,
	label_1: Number,
	label_2: Number,
	timeStamp: Number,
	show: Boolean
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
