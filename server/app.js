require ('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const ejs = require('ejs');
const methodOverride = require('method-override');
const app = express();
let port = process.env.PORT;
if (port == null || port == "") {
    port = 5000;
  }

const articleRouter = require('./routes/articles');
const projectRouter = require('./routes/projects');
const timelineRouter = require('./routes/timeline');

mongoose.connect('mongodb://localhost:27017/portfolio');
// mongoose.connect(`mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@cluster0.nt3rk.mongodb.net/portfolioDB`);

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
app.use('/timeline', timelineRouter)

app.listen(port, ()=>{
    console.log(`Server is listening on port : ${port}`)
})