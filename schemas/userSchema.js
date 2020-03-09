const mongoose = require('mongoose')
const Schema = mongoose.Schema

const userSchema = new Schema({
	userId: String,
	account: Number,
	pw: String,
	name: String,
	headUrl: String,
	roles: Array
})

module.exports = {
	userSchema
}