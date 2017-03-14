'use strict'

const chai = require('chai')
const should = chai.should()
const chaiHttp = require('chai-http')

chai.use(chaiHttp)

describe('Can request endpoint', () => {
  it('GET ALL ARTICLE', (done) => {
    chai.request('http://localhost:3000/api')
      .get('/')
      .end((err, res) => {
        res.should.have.status(200)
        res.should.be.json
        done(err)
      })
  })
})
