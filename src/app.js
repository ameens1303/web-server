const express = require('express');
const path = require('path');

const app = express();

const publicDirectoryPath = path.join(__dirname,'../public');

app.use(express.static(publicDirectoryPath));
app.set('view engine', 'hbs')



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

app.listen(3000, ()=>{
    console.log("start listening")
})