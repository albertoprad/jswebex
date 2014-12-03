var request = require('request');
var cache 	= {}

function Project(name) {
	var self = this;
	this.name = name;

	this.getUsers = function (cb) {
		var URL 	= 'http://gitscoring.herokuapp.com/' + self.name;
		var options = {
		    url: URL,
		    headers: {
		        'Accept': 'application/json'
		    }
		};

		request(options, function (err, res, body) {
			if (err) {
				console.log(err);
				return;
			}
			console.log(body);
			var obj = JSON.parse(body);

			cb(obj);
		});
	};

	this.getUsername = function (cb) {
		var URL 	= 'http://gitscoring.herokuapp.com/' + self.name;
		var options = {
		    url: URL,
		    headers: {
		        'Accept': 'application/json'
		    }
		};

		request(options, function (err, res, body) {
			if (err) {
				console.log(err);
				return;
			}
			console.log(body);
			var obj = JSON.parse(body);

			cb(obj);
		});
	};
}

module.exports = Project;