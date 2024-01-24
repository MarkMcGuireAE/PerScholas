const express = require('express');
const jsxEngine = require("jsx-view-engine");
const app = express();
const PORT = 4000;

// Configure the view engine
app.set("view engine", "jsx");
// setup our view engine
app.engine("jsx", jsxEngine());



const fruits = require('./models/fruits.js'); //NOTE: it must start with ./ if it's just a file, not an NPM package

const vegetables = require('./models/vegetables.js'); //NOTE: it must start with ./ if it's just a file, not an NPM package

app.use((req, res, next) => {
    console.log('I run for all routes');
    next();
});

//near the top, around other app.use() calls
app.use(express.urlencoded({extended:false}));


app.get('/fruits', function(req, res){
    res.render('fruits/Index', { fruits: fruits });
});      

app.get('/fruits/new', (req, res) => {
    res.render('fruits/New');
});

app.post('/fruits', (req, res)=>{
    if(req.body.readyToEat === 'on'){ //if checked, req.body.readyToEat is set to 'on'
        req.body.readyToEat = true;
    } else { //if not checked, req.body.readyToEat is undefined
        req.body.readyToEat = false;
    }
    fruits.push(req.body);
    res.redirect('/fruits'); //send the user back to /fruits
});

app.get('/fruits/:indexOfFruitsArray', (req, res) => {
    res.render("fruits/Show",{
        fruit: fruits[req.params.indexOfFruitsArray]
    })
});

app.get('/vegetables', function(req, res){
    res.render('vegetables/Index', { vegetables: vegetables });
});      

app.get('/vegetables/new', (req, res) => {
    res.render('vegetables/New');
});

app.post('/vegetables', (req, res)=>{
    if(req.body.readyToEat === 'on'){ //if checked, req.body.readyToEat is set to 'on'
        req.body.readyToEat = true;
    } else { //if not checked, req.body.readyToEat is undefined
        req.body.readyToEat = false;
    }
    vegetables.push(req.body);
    res.redirect('/vegetables'); //send the user back to /vegetables
});

app.get('/vegetables/:indexOfVegetablesArray', (req, res) => {
    res.render("vegetables/Show",{
        vegetables: vegetables[req.params.indexOfVegetablesArray]
    })
});

app.listen(PORT, () => {
    console.log('listening to port', PORT);
});