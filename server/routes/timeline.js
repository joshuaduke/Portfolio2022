const express = require('express');
const router = express.Router();
const Timeline = require('../models/timeline');

//Retrieve Blog posts for the frontend
router.get('/items', (req, res)=>{
    Timeline.find((err, result)=>{
        try {
            console.log(result);
            res.status(200).json(result)
        } catch (error) {
            res.status(500).json(err);
        }
    })
})

// Retrieve one blog post by Id
// router.get('/posts/:id', (req, res)=>{
//     Article.findById(req.params.id, (err, post)=>{
//         try {
//             console.log(post);
//             res.status(200).json(post)
//         } catch (error) {
//             res.status(500).json(err);
//         }
//     })
// })

router.get('/', async (req, res)=>{
    const timeline = await Timeline.find().sort({createdAt: 'desc'});
    res.render('timeline/index', {data: timeline})
})

router.get('/new', (req, res)=>{
    res.render('timeline/new', {timeline: new Timeline() })
})

router.get('/edit/:id', async (req, res)=>{
    const timeline = await Timeline.findById(req.params.id);
    res.render('timeline/edit', {timeline: timeline})
})

router.post('/', async (req, res, next)=>{
    req.timeline = new Timeline();
    next();
}, saveTimelineandRedirect('new'))

router.put('/:id', async (req, res, next)=>{
    req.timeline = await Timeline.findById(req.params.id);
    next();
}, saveTimelineandRedirect('edit'))

router.delete('/:id', async (req, res)=>{
    await Timeline.findByIdAndDelete(req.params.id)
    res.redirect('/timeline');
})

function saveTimelineandRedirect(path) {
    return async (req, res) =>{
        let timeline = req.timeline
        timeline.tag = req.body.tag
        timeline.color = req.body.color
        timeline.description = req.body.description
        timeline.linkText = req.body.linkText
        timeline.link = req.body.viewMore
        timeline.createdAt = req.body.date
    
        try {
            timeline = await timeline.save();
            res.redirect(`/timeline`);
            // res.redirect(`/timeline/${timeline.slug}`);
        } catch (error) {
            console.log(error);
            res.render(`timeline/${path}`, {timeline: timeline})
        }
        
    }
}

module.exports = router