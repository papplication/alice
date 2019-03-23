module.exports = {
	randomInt: function (low, high) {
		return Math.floor(Math.random() * (high - low) + low)
	},

	findRateLimitHeader: function (headers, name) {
		return Object.keys(headers).filter(header => header.match('ratelimit') && header.match(name)).map(header => headers[header])[0]
	}
}