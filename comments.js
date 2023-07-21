//create web server
var express = require('express');
var router = express.Router();
var Comment = require('../models/comment');
var Post = require('../models/post');
var jwt = require('jsonwebtoken');
var config = require('../config');
var User = require('../models/user');

// create a comment
router.post('/', function(req, res) {
    var token = req.body.token || req.query.token || req.headers['x-access-token'];
    var id = req.body.id;
    var comment = new Comment({
        text: req.body.text,
