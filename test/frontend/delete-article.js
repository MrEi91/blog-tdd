'use strict'

const chai = require('chai')
const should = chai.should()
const chaiHttp = require('chai-http')

chai.use(chaiHttp)

describe('Can request endpoint', () => {
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
