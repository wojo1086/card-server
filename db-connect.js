const mysql = require('mysql')

let Connection = function() {
	let connection = mysql.createConnection({
		host: 'localhost',
		user: 'dbuser',
		password: 'Badboy21!',
		database: 'card'
	})

	return connection
}
module.exports = new Connection()