var express = require('express');
var router = express.Router();
var projectsService = require('../services/projectsService');

router.get('/', function(req, res, next) {

    var projects = projectsService.getProjects();


    res.render('projects', {title: 'Projetos', projects:projects});
    
})

router.get('/projects/:projectId', function(req, res, next){
    var projectId = req.params.projectId;

    var projects = projectsService.getProjects();
    
    var project = projects.filter((project) => project.id == projectId)[0];

    res.render('project', {title: project.name, project:project});

})

module.exports = router;