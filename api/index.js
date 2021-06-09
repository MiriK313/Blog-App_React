const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const mongoose = require('mongoose')
var postMessageRoutes = require('./controllers/postMessageController')

mongoose.connect('mongodb://localhost:27017/postManagerDB', { useNewUrlParser: true, useUnifiedTopology: true },
    err => {
        if (!err)
            console.log('Mongodb connection succeeded.')
        else
            console.log('Error while connecting MongoDB : ' + JSON.stringify(err, undefined, 2))
    })


var app = express()
app.use(bodyParser.json())
app.use(cors({ origin: 'http://localhost:3000' }))
app.listen(4000, () => console.log('Server started at : 4000'))


app.use('/postMessages', postMessageRoutes)