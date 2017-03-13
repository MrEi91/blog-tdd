'use strict'

const mongoose = require('mongoose')
const Schema = mongoose.Schema
// require('../db')

let articleSchema = new Schema({
  title: String,
  content: String,
  category: String,
  slug: String
}, {
  timestamps: true
})

let article = mongoose.model('article', articleSchema)

module.exports = article
