var express = require('express');
var router = express.Router();
var authService = require('../services/authService');

router.get('/login', function(req, res, next){

    res.render('login', {msg: ''});
});

router.post("/login", function(req, res, next){

    var email = req.body.email;
    var password = req.body.password;

    if(authService.validateUserEmailAndPassword(email, password)){
        if(!req.session.authenticatedUsers){
            req.session.authenticatedUsers = []; 
        }

        var user = authService.getUserByEmail(email);
        user.loginToken = authService.generateToken();
        
        req.session.authenticatedUsers.push(user);
        res.cookie('loginToken', user.loginToken, {maxAge: 900000, httpOnly: true});
        
        res.redirect('admin/post');
    }

    res.render('login', {msg: 'Email e senha incorretos'});
});

module.exports = router;