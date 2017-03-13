'use strict'
const express = require('express')
const slug = require('slug')
const article = require('../models/article')

let getArticles = (req, res) => {
  article.find({}).then((data) => {
    !data ? res.send('Items isEmpty') : res.send(data)
    res.send(data)
  }).catch((e) => {
    if (e) throw e
  })
}

let getArticle = (req, res) => {
  article.findOne({
    slug: req.params.slug
  }).then((data) => {
    res.send(data)
  })
}

let createArticle = (req, res) => {
  article.create({
    title: req.body.title,
    content: req.body.content,
    category: req.body.category,
    slug: slug(req.body.title).toLowerCase()
  }).then((data) => {
    res.send(data)
  }).catch((e) => {
    if (e) throw e
  })
}

let updateArticle = (req, res) => {
  article.findOne({
    slug: req.params.slug
  }).then((data) => {
    if (!data) {
      res.send('article not found!')
    } else {
      data.update({
        title: req.body.title,
        content: req.body.content,
        category: req.body.category,
        slug: slug(req.body.title).toLowerCase()
      }).then((result) => {
        res.send(data)
      }).catch((e) => {
        if (e) throw e
      })
    }
  })
}

let deleteArticle = (req, res) => {
  article.findOne({
    slug: req.params.slug
  }).then((data) => {
    if (!data) {
      res.send('article is not found!')
    } else {
      data.remove(req.params.title).then((result) => {
        res.send('article has been deleted!')
      }).catch((e) => {
        if (e) throw e
      })
    }
  })
}

module.exports = {
  getArticles,
  getArticle,
  createArticle,
  updateArticle,
  deleteArticle
}
