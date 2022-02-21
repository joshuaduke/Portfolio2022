const express = require('express');
const router = express.Router();
const Article = require('../models/article');

router.get('/', (req, res)=>{
    res.render('articles/index')
})

router.get('/new', (req, res)=>{
    res.render('articles/new')
})

router.post('/', (req, res)=>{
    console.log('Post articles');
})

module.exports = router