const path = require('path')
const express = require('express')
const hbs = require('hbs')
const airTemp = require('./utilits/airTemp')

const app = express()
const viewsPath = path.join(__dirname, '../templates/views')
const partialsPath = path.join(__dirname, '../templates/partials')

// Setting up hbs
app.set('view engine', 'hbs')
app.set('views',viewsPath)
hbs.registerPartials(partialsPath)


app.use(express.static(path.join(__dirname,'../public')))

app.get('', (req,res)=>{
    res.render('index', {
        title: 'Weather App',
        name: 'Chenxin'
    })
})

app.get('/about', (req,res)=>{
    res.render('about', {
        title:'Hsss',
        name:'yoooo'

    })
})

app.get('/help', (req, res)=>{
    res.render('help', {
        message: "You suck",
        title: 'HIIII'
    })
})

app.get('/weather', (req,res)=>{
    if(!req.query.time) {
        return res.send({
            error: "You must provide an time!!"
        })
    }
    airTemp(req.query.time, (error, {value}={})=>{
        if(error){
            return res.send({
                error
            })
        }
        res.send({value})
    })
})

app.get('*', (req,res)=>{
    res.render('error', {
        message:'Page not found',
        title:'Error 404'
    })
})



app.listen(3000, ()=>{
    console.log('Server is up on port 3000.')
})



