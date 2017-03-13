'use strict'

const chai = require('chai')
const should = chai.should()
const chaiHttp = require('chai-http')
const fitur = require('../routes/index')

chai.use(chaiHttp)

describe('Can request endpoint', () => {
  it('POST ARTICLE', (done) => {
    chai.request('http://localhost:3000/api')
      .post('/article')
      .send({
        title: 'Mocha testing',
        content: 'One a request is created with a given VERB, it can have headers!',
        category: 'world'
      })
      .end((err, res) => {
        res.should.have.status(200)
        res.body.title.should.equal('Mocha testing')
        res.body.content.should.equal('One a request is created with a given VERB, it can have headers!')
        res.body.title.should.equal('world')
        done(err)
      })
  })

  it('GET ALL ARTICLE', (done) => {
    chai.request('http://localhost:3000/api')
      .get('/')
      .end((err, res) => {
        res.should.have.status(200)
        res.should.be.json
        done(err)
      })
  })

  it('GET ONE ARTICLE', (done) => {
    chai.request('http://localhost:3000/api')
      .get('/article/:id')
      .end((err, res) => {
        res.should.have.status(200)
        res.should.be.json
        res.body.title.should.equal('Mocha testing')
        res.body.content.should.equal('One a request is created with a given VERB, it can have headers!'),
          res.body.category.should.equal('Technology')
        done(err)
      })
  })

  it('PUT ARTICLE', (done) => {
    chai.request('http://localhost:3000/api')
      .put('/article/:id')
      .set({
        title: 'Mocha testing',
        content: 'One a request is created with a given VERB, it can have headers!',
        category: 'Technology'
      })
      .end((err, res) => {
        res.should.have.status(200)
        res.should.be.json
        res.body.title.should.equal('Mocha testing')
        res.body.content.should.equal('One a request is created with a given VERB, it can have headers!')
        res.body.category.should.equal('Technology')
        done(err)
      })
  })

  it('DELETE ARTICLE', (done) => {
    chai.request('http://localhost:3000/api')
      .delete('/article/:id')
      .end((err, res) => {
        res.should.have.status(200)
        res.should.be.json
        res.body.title.should.equal('Mocha testing')
        res.body.content.should.equal('One a request is created with a given VERB, it can have headers!')
        res.body.category.should.equal('Technology')
        done(err)
      })
  })
})
