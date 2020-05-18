const mongoose = require('mongoose')
const Schema = mongoose.Schema

const rotationUrlSchema = new Schema({
	url: String
})

const  navDataSchema = new Schema({
	index: Number,
	label: String,
	aData: Array | Object
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
	label_0: String,
	label_1: String,
	label_2: String,
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
