const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();
const Project = require('../models/project');


//Retrieve Projects for frontend
router.get('/list', (req, res)=>{
    Project.find((err, projects)=>{
        try {
            console.log(projects);
            res.status(200).json(projects)
        } catch (error) {
            res.status(500).json(err);
        }
    })
})

router.get('/:blogId', async (req, res)=>{
    try {
        const project = await Project.findOne({blogLink: req.params.blogId});
        res.status(200).json(project);
    } catch (error) {
        res.status(500).json(error);
    }

})

//Index
router.get('/', (req, res)=>{

    try {
        const projects = await Project.find();
        res.render('projects/index', {data: projects})
    } catch (error) {
        res.status(500).json(error);
    }

    
    // Project.find((err, projects)=>{
    //     if(err) {
    //         res.send({message: 'Error finding projects'})
    //     }
    //     if(projects.length > 0){
    //         console.log(projects);
    //         res.render('projects/index', {data : projects})
    //     }  
    // })
})

//New
router.get('/new', (req, res)=>{
    res.render('projects/new', {data: new Project() })
})

//Create
router.post('/', (req, res)=>{
    const tags = (req.body.tags).split(',',);
    const data = {
        title: req.body.name,
        description: req.body.desc,
        liveLink: req.body.liveLink,
        githubLink: req.body.githubLink,
        blogLink: req.body.blogLink,
        status: req.body.verifyCompleted,
        tags: tags
    }
    console.log(req.body.verifyCompleted)

    // console.log(data);

    Project.create(data, (err, project)=>{
        if (err) {
            console.log(err);
            res.send({message: err})
        } else {
            console.log('Project has been created')
            res.redirect('/projects')
        }
        
    })
});

//Edit
router.get('/:id/edit', (req, res)=>{
    const id = req.params.id;

    Project.findById(id, (err, project)=>{
        if (err) throw err;

        if(!project){
            console.log('Project does not exist');
        } else {
            console.log(project);
            res.render('projects/edit', {data: project});
        }
        
    })

})

//Update
router.patch('/:id', (req, res)=>{
    const id = req.params.id;
    const tags = (req.body.tags).split(',',);
    // let status = false;

    // if(req.body.verifyCompleted === 'Completed'){
    //     status = true;
    // }

    const updatedProject = {
        title: req.body.name,
        description: req.body.desc,
        liveLink: req.body.liveLink,
        githubLink: req.body.githubLink,
        blogLink: req.body.blogLink,
        status: req.body.verifyCompleted,
        tags: tags
    }

    Project.findByIdAndUpdate(id, updatedProject,(err, result)=>{
        if(err) throw err;
        console.log('Project has been updated');
        res.redirect('/projects')
    })
})

//Delete
router.delete('/:id', (req, res)=>{
    const id = req.params.id;
    
    Project.findByIdAndDelete(id, (err, deleted)=>{
        if(err) throw err;
        console.log('Deleted:', deleted);
        res.redirect('/projects')
    })
})

module.exports = router