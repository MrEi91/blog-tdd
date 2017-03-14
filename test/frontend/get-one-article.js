'use strict'

const chai = require('chai')
const should = chai.should()
const chaiHttp = require('chai-http')

chai.use(chaiHttp)

describe('Can request endpoint', () => {
  it('GET ONE ARTICLE', (done) => {
    chai.request('http://localhost:3000/api')
      .get('/article/mocha-testing')
      .end((err, res) => {
        res.should.have.status(200)
        res.should.be.json
        res.body.title.should.equal('Mocha testing')
        res.body.content.should.equal('One a request is created with a given VERB, it can have headers!')
        res.body.category.should.equal('Technology')
        res.body.slug.should.equal('mocha-testing')
        done(err)
      })
  })
})
