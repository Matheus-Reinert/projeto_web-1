var express = require('express');
var router = express.Router();
var vagasService = require('../services/vagasService');

/* GET home page. */
router.get('/vagas', function(req, res, next){
   
    var vagas = vagasService.getVagas();

    res.render('vagas', {title: 'Vagas', vagas: vagas});
})

module.exports = router;