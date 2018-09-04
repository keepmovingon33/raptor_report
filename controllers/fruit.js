// Require modules
var express = require('express');

// Global variables
var db = require('../models');
var router = express.Router();

// Define routes 
router.get('/', function(req, res){
		db.fruit.findAll().then(function(f){
		res.render('fruits/index', {fruit: f});
	}).catch(function(err){
		res.render('404');
	});
});

router.get('/new', function(req, res){
	res.render('fruits/new');
});

router.post('/', function(req, res){
	res.send(req.body);
});

module.exports = router;