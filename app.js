const express = require("express");
const path = require("path")
const fs = require("fs");
const app = express();
const port = 80;

// ##readMe##: the text written between ++ and -- lines 
// is the initialisation code for all the sites and can
// remain common with just the constant part remaining
// to be edited.

// same applies to the first five lines

// ++express specific stuff++
app.use('/static', express.static('static'))//for serving static files
app.use(express.urlencoded())
// --express specific stuff--


// ++pug specific stuff++
app.set('view engine', 'pug')//set the template engine as pug
app.set('views',  path.join(__dirname,'views'))// set the views directory
// we can sue path.join because we have imported path in line 2 of this file.
// --pug specific stuff--


//++endpoints++
app.get('/', (req,res) =>{
    
    const params = { }
    res.status(200).render('index.pug', params);
})
// --endpoints--

// ++start the server++
app.listen(port, () =>{
    console.log(`the application has started successfully on port ${port}`)
})
// --start the server--
