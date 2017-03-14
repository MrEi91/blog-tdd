'use strict'

const chai = require('chai')
const should = chai.should()
const chaiHttp = require('chai-http')

chai.use(chaiHttp)

describe('Can request endpoint', () => {
  it('POST ARTICLE', (done) => {
    chai.request('http://localhost:3000/api')
      .post('/article')
      .send({
        title: 'Mocha testing',
        content: 'One a request is created with a given VERB, it can have headers!',
        category: 'Technology',
        slug: 'mocha-testing'
      })
      .end((err, res) => {
        res.should.have.status(200)
        res.body.title.should.equal('Mocha testing')
        res.body.content.should.equal('One a request is created with a given VERB, it can have headers!')
        res.body.category.should.equal('Technology')
        res.body.slug.should.equal('mocha-testing')
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

  it('PUT ARTICLE', (done) => {
    chai.request('http://localhost:3000/api')
      .put('/article/mocha-testing')
      .send({
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
        res.body.slug.should.equal('mocha-testing')
        done(err)
      })
  })

  it('DELETE ARTICLE', (done) => {
    chai.request('http://localhost:3000/api')
      .delete('/article/mocha-testing')
      .end((err, res) => {
        if (err) {
          done(err)
        } else {
          res.should.be.html
          res.should.have.status(200)
          done()
        }
      })
  })
})
