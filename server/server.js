require('dotenv').config()
const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const path = require('path')
const app = express()

app.use(cors())
app.use(express.json({ extended: false }))

app.use('/api/users', require('./routes/api/users'))
app.use('/api/auth', require('./routes/api/auth'))
app.use('/api/profile', require('./routes/api/profile'))
app.use('/api/posts', require('./routes/api/posts'))

if (process.env.NODE_ENV === 'production') {
	app.use(express.static('client/build'))
	app.get('*', (req, res) => {
		res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
	})
}

const port = process.env.PORT || 5000
const start = async () => {
	try {
		await mongoose.connect(process.env.MONGO_URI)
		console.log('MongoDB connected')
		app.listen(port, () => {
			console.log('Server started on port 5000')
		})
	} catch (error) {
		console.log(error)
	}
}

start()
