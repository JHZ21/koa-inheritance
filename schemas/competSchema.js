const mongoose = require('mongoose')
const Schema = mongoose.Schema

const  navDataSchema = new Schema({
	index: Number,
	label: String,
	aData: Array
})

const projectsSchema = new Schema({
	PId:  String,
	PName: String,
	PSummary: String,
	TName: String,
	TMembers: Array,
	imgUrl: String,
	label_0: Number,
	label_1: Number,
	show: Boolean
})

const projectContentSchema = new Schema({
	PId: String,
	index: Number,
	title: String,
	content: Array,
	show: Boolean
})

const projectTeamSchema = new Schema({
	PId: String,
	userId: String,
	headUrl: String,
	index: Number,
	introduce: Array,
	contribution: Array,
	show: Boolean
})

const projectStepsSchema = new Schema({
	PId: String,
	index: Number,
	pleanId: String,
	planName: String,
	activeNum: Number,
	master: {
		userId: String
	},
	stepsData: {
		deadline: String,
		description: String
	},
	show: Boolean
})

module.exports = {
	navDataSchema,
	projectsSchema,
	projectContentSchema,
	projectTeamSchema,
	projectStepsSchema
}