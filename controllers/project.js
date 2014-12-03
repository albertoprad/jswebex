var Project = require('../models/project');
//var request = require('request');

function users(req, res) {
	var owner 	= req.params.owner;
	var repo 	= req.params.repo;
	var project = new Project(owner + '/' + repo);

	project.getUsers(function (users) {
		res.render('users.twig', {
			users: users
		});
	});
};

function username(req, res) {
	var owner 	= req.params.owner;
	var repo 	= req.params.repo;
	var username 	= req.params.username;
	var project = new Project(owner + '/' + repo + '/' + username);

	project.getUsername(function (username) {
		res.render('username.twig', {
			username: username
		});
	});
};

module.exports = {
	users: users,
	username: username
};