const mongoose = require('mongoose')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

const UserSchema = mongoose.Schema(
	{
		username: {
			type: String,
			required: [true, 'Username is required'],
			mixLength: [3, 'Username should be at least 3 characters'],
			maxLength: [20, 'Username can not exceed more than 20 characters'],
			trim: true,
		},
		email: {
			type: String,
			required: [true, 'User email is required'],
			match: [
				/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
				'Please provide a valid email',
			],
			unique: true,
		},
		password: {
			type: String,
			required: [true, 'Password is required'],
			mixLength: [6, 'Password should be at least 6 characters'],
			trim: true,
		},
	},
	{ timestamps: true }
)

UserSchema.pre('save', async function () {
	if (!this.isModified('password')) return
	const salt = await bcrypt.genSalt(10)
	this.password = await bcrypt.hash(this.password, salt)
})

UserSchema.methods.createJWT = function (time = process.env.JWT_LIFETIME) {
	return jwt.sign({ userId: this._id }, process.env.JWT_SECRET, {
		expiresIn: time,
	})
}

UserSchema.methods.comparePassword = function (candidatePassword) {
	const isMatch = bcrypt.compareSync(candidatePassword, this.password)
	return isMatch
}

module.exports = mongoose.model('User', UserSchema)
