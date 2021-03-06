import chai from 'chai';
import chaiHttp from 'chai-http';

import server from '../app';
import { offices } from '../helpers';

const officesMaxID = offices.length;

const should = chai.should();
const expect = chai.expect;

chai.use(chaiHttp);

const random = Math.floor(Math.random() * 1000) + 1;

const officeTest = {
    type: 'fedearal',
    name: 'numbejGG2' + random
};

  describe('Political offices Creation Test', () => {
    it('Political offices creation Succeed', (done) => {
      chai.request(server)
        .post('/api/v1/offices')
        .send(officeTest)
        .end((err, res) => {
          res.should.have.status(201);
          expect(res.body).to.be.a('object');
          expect(res.body.data[0].type).to.be.equal(officeTest.type);
          expect(res.body.data[0].name).to.be.equal(officeTest.name);
          done();
        });
    });
    it('Check political party existance', (done) => {
      chai.request(server)
        .post('/api/v1/offices')
        .send(officeTest)
        .end((err, res) => {
          res.should.have.status(409);
          done();
        });
    });
  });

  describe('Get all political offices Test', () => {
    it('Get all political offices Succeed', (done) => {
      chai.request(server)
        .get('/api/v1/offices')
        .end((err, res) => {
          res.should.have.status(200);
          expect(res.body).to.be.a('object');
          done();
        });
    });
  });

  describe('Get specific political offices Test', () => {
    it('Get specific political offices Succeed', (done) => {
      chai.request(server)
        .get(`/api/v1/offices/${officesMaxID}`)
        .end((err, res) => {
          res.should.have.status(200);
          expect(res.body).to.be.a('object');
          done();
        });
    });
  });