require ('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const ejs = require('ejs');
const methodOverride = require('method-override');
const app = express();
const port = process.env.PORT || 5000;

const articleRouter = require('./routes/articles');
const projectRouter = require('./routes/projects');


mongoose.connect('mongodb://localhost:27017/portfolio');

app.set('view engine', 'ejs');
app.use(cors());
app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(methodOverride('_method'));

app.get('/', (req, res)=>{
    res.render('home');
})

app.use('/articles', articleRouter)
app.use('/projects', projectRouter)

app.listen(port, ()=>{
    console.log(`Server is listening on port : ${port}`)
})