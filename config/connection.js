var mysql =require('mysql');
var connection = mysql.createConnection({
	port:3000,
	host:'localhost',
	user: 'root',
	password: "6687",
	database:"burger_db"
});

connection.connect(function(err) {
	if(err) {
		console.error('cant connect: ' + err.stack);
		return;
	}
	console.log('connected as id' +connection.thredId);

});

module.exports = connection;
