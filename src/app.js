const express = require('express');
const path = require('path');
const hbs = require('hbs')

const app = express();

const publicDirectoryPath = path.join(__dirname,'../public');
const viewPath = path.join(__dirname,'../templates/views');
const partialsPath = path.join(__dirname,'../templates/partials');



app.use(express.static(publicDirectoryPath));
app.set('view engine', 'hbs')
app.set('views', viewPath)
hbs.registerPartials(partialsPath);





app.get('', (req, res) => {
    res.render('index', {
        title: 'Weather',
        name: 'Andrew Mead'
    })
})

app.get('/help', (req, res) => {
    res.render('help', {
        helpText: 'This is some helpful text.'
    })
})

app.get('/about', (req, res) => {
    res.render('about', {
        title: 'About Me',
        name: 'Andrew Mead'
    })
})

app.get("/weather",(req, res)=>{
    res.send('<title> Weather</title><p> Display the Weather</p>')

})

app.get('/help/*', (req, res) => {
    res.render('errorHelp404', {
        title: 'Weather',
        name: 'Andrew Mead'
    })
    //res.send('<title> HELP ARTICLE NOT FOUND</title><p> Display the Weather</p>')
})

app.get('*', (req, res) => {
    res.render('error404', {
        title: 'Weather',
        name: 'Andrew Mead'
    })
})



app.listen(3000, ()=>{
    console.log("start listening")
})