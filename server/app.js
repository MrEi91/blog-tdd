'use strict'

const express = require('express')
const bodyParser = require('body-parser')

const mongoose = require('mongoose')
require('dotenv').config()

let mongoDB = `mongodb://localhost/blog-tdd-db`
mongoose.Promise = global.Promise
mongoose.connect(mongoDB)

let db = mongoose.connection

db.on('error', console.error.bind(console, 'MongoDB Connection error'))

const app = express()

let index = require('./routes/index')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
  extended: false
}))

app.use('/api', index)

app.listen(3000)

module.exports = app
