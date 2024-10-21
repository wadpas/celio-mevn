const mongoose = require('mongoose')
const Schema = mongoose.Schema

const EmailSchema = Schema(
	{
		from: {
			type: Schema.Types.ObjectId,
			ref: 'users',
		},
		text: {
			type: String,
			required: true,
		},
		name: {
			type: String,
		},
		avatar: {
			type: String,
		},
	},
	{ timestamps: true }
)

module.exports = mongoose.model('Email', PostSchema)
