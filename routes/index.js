'use strict'

const express = require('express')
const router = express.Router()

router.get('/', (req, res, next) => {
  res.send('sucsess')
})

module.exports = router
