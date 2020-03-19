const mongoose = require('mongoose')
const Schema = mongoose.Schema

const  navDataSchema = new Schema({
	index: Number,
	label: String,
	aData: Array
})

const projectsSchema = new Schema({
	id:  String,
	PName: String,
	PSummary: String,
	TName: String,
	TMembers: Array,
	imgUrl: String,
	label_0: Number,
	label_1: Number,
	show: Boolean
})

module.exports = {
	navDataSchema,
	projectsSchema
}