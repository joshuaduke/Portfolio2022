const express = require('express');
const router = express.Router();
const Article = require('../models/article');

//Retrieve Blog posts for the frontend
router.get('/posts', (req, res)=>{
    Article.find((err, posts)=>{
        try {
            console.log(posts);
            res.status(200).json(posts)
        } catch (error) {
            res.status(500).json(err);
        }
    })
})

// Retrieve one blog post by Id
router.get('/posts/:id', (req, res)=>{
    Article.findById(req.params.id, (err, post)=>{
        try {
            console.log(post);
            res.status(200).json(post)
        } catch (error) {
            res.status(500).json(err);
        }
    })
})

router.get('/', async (req, res)=>{
    const articles = await Article.find().sort({createdAt: 'desc'});
    res.render('articles/index', {data: articles})
})

router.get('/new', (req, res)=>{
    res.render('articles/new', {article: new Article() })
})

router.get('/edit/:id', async (req, res)=>{
    const article = await Article.findById(req.params.id);
    res.render('articles/edit', {article: article})
})

router.get('/:slug', async (req, res)=>{
    const article = await Article.findOne({slug: req.params.slug});

    if(article === null){
        res.redirect('/articles');
    }

    res.render('articles/show', {article: article});
})

router.post('/', async (req, res, next)=>{
    req.article = new Article();
    next();
}, saveArticleandRedirect('new'))

router.put('/:id', async (req, res, next)=>{
    req.article = await Article.findById(req.params.id);
    next();
}, saveArticleandRedirect('edit'))

router.delete('/:id', async (req, res)=>{
    await Article.findByIdAndDelete(req.params.id)
    res.redirect('/articles');
})

function saveArticleandRedirect(path) {
    return async (req, res) =>{
        let article = req.article
        article.title = req.body.title
        article.description = req.body.description
        article.markdown = req.body.markdown
        article.createdAt = req.body.date
    
        try {
            article = await article.save();
            res.redirect(`/articles/${article.slug}`);
        } catch (error) {
            console.log(error);
            res.render(`articles/${path}`, {article: article})
        }
        
    }
}

module.exports = router