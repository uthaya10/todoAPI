const express = require('express'),
    mongoose = require('mongoose'),
    app = express(),
    bodyParser = require('body-parser');

mongoose.connect('mongodb://localhost:27017/todo', {useNewUrlParser: true, useUnifiedTopology: true}).then(()=>{
    console.log("DB Connected");
}).catch(err=>{
    console.log(`Error ${err}`);
})

app.use(bodyParser.urlencoded({extended:false})) 
app.use(bodyParser.json()); 

const todo = require("./routes/todo");
app.use(todo);

app.listen(3000, ()=>{
    console.log("Server Started");
})




