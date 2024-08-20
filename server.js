const express = require('express')
const connectDB = require('./config/db')

const app = express()

connectDB()

app.get('/', (req, res) => {
	res.send('Hello World!')
})

const PORT = process.env.PORT || 5000

app.listen(PORT, () => {
	console.log(`Server is running on port ${PORT}`)
})
