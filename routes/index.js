var express = require('express');
var router = express.Router();
var postsService = require('../services/postsService');
var projectsService = require('../services/projectsService');

/* GET home page. */
router.get('/', function(req, res, next) {
    var posts = postsService.getPosts();

    var post = posts.filter((post) => post.id <= 3);

    res.render('index', {title: 'Blog', posts:post});
});

router.get('/posts', function(req, res, next){
   
    var posts = postsService.getPosts();

    res.render('posts_all', {title: 'Posts', posts: posts});
});

router.get('/posts/:postId', function(req, res, next){
    var postId = req.params.postId;

    var posts = postsService.getPosts();
    
    var post = posts.filter((post) => post.id == postId)[0];

    res.render('post', {title: post.title, post: post});

})

router.get('/projects', function(req, res, next) {

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
