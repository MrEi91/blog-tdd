'use strict'

const chai = require('chai')
const should = chai.should()
const Nightmare = require('nightmare')

// chai.use(chaiHttp)

describe('Cerate new article', function () {
  this.timeout(50000)
  it('should return new article', function (done) {
    const nightmare = Nightmare({show: true})
    nightmare
    .goto('http://localhost:8080')
    .wait('#btn-newArticle')
    .click('#btn-newArticle')
    .wait(1000)
    .click('#title')
    .type('#title', 'Mocha testing')
    .click('#category')
    .type('#category', 'Technology')
    .click('#content')
    .type('#content', 'One a request is created with a given VERB, it can have headers!')
    .click('#btn-submit')
    .evaluate(function () {
      return document.querySelector('#articles').innerHTML
    })
    .end()
    .then(function (result) {
      result.should.be.a('string')
      done()
    })
  })
})
