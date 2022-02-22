const mongoose = require('mongoose');

const timelineSchema = new mongoose.Schema({
    tag:{
        type: String,
        required: true
    },
    color:{
        type: String,
        required: true
    },
    description:{
        type: String
    },
    link: {
        type: String,
    },
    linkText: {
        type:String
    },
    createdAt: {
        type: Date,
        default: Date.now,
        required: true
    }
})

/*  Timeline data
    {
        title: 'Title here',
        date: 'Date Here',
        category: {
            tag: 'somethingHere',
            color: 'red'
        },
        link: {
            url: 'Url',
            text: 'read more'
        }
    }
*/


module.exports = mongoose.model('Timeline', timelineSchema);