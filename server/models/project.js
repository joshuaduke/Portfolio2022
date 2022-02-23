const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema({
    title: {
        type:String,
        required: true
    },
    description:{
        type:String,
        required: true
    },
    status: {
        type: Boolean,
        required: true
    },
    liveLink: {
        type: String,
    },
    githubLink: {
        type: String,
    },
    blogLink: {
        type: String,
    },
    tags: [String]
})

module.exports = mongoose.model('Project', projectSchema);