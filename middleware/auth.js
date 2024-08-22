const jwt = require('jsonwebtoken')
const config = require('config')

module.exports = (req, res, next) => {
	const token = req.header('x-access-token')
	if (!token) {
		return res.status(401).json({ msg: 'Unauthorized' })
	}

	try {
		const decoded = jwt.verify(token, config.get('jwtSecret'))
		req.user = decoded.user
		next()
	} catch (error) {
		res.status(401).json({ msg: 'Token is not valid' })
	}
}
