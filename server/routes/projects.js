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

router.get('/blog/:blogId', async (req, res)=>{
    try {
        const project = await Project.findOne({blogLink: req.params.blogId});
        res.status(200).json(project);
    } catch (error) {
        res.status(500).json(error);
    }

})

//Index
router.get('/', async (req, res)=>{

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
router.post('/', async (req, res, next)=>{
    req.project = new Project();
    next();
}, saveProjectandRedirect('new'));

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
router.patch('/:id', async (req, res, next)=>{
    req.project = await Project.findById(req.params.id);
    next();
}, saveProjectandRedirect('edit'))

//Delete
router.delete('/:id', (req, res)=>{
    const id = req.params.id;
    
    Project.findByIdAndDelete(id, (err, deleted)=>{
        if(err) throw err;
        console.log('Deleted:', deleted);
        res.redirect('/projects')
    })
})

function saveProjectandRedirect(path) {
    return async (req, res) =>{
        const tags = (req.body.tags).split(',');
        let project = req.project
        project.title= req.body.name,  
        project.description= req.body.desc,
        project.liveLink= req.body.liveLink,
        project.githubLink= req.body.githubLink,
        project.blogLink= req.body.blogLink,
        project.status= req.body.verifyCompleted,
        project.tags= tags
    
        try {
            project = await project.save();
            res.redirect(`/projects`);
        } catch (error) {
            console.log(error);
            res.render(`projects/${path}`, {data: project})
        }
        
    }
}

module.exports = router