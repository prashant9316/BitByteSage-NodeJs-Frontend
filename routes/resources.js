const routes = require('express').Router();


routes.get('/', (req, res) => {
    res.render('resources/index');
});


routes.get('/blog', (req, res) => {
    res.render('resources/blog');
});

routes.get('/blog/:id', (req, res) => {
    res.render('resources/blog-single');
});


module.exports = routes;