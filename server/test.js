import chaiHttp from 'chai-http';
import chai, { expect } from 'chai';
import request from 'supertest';
import app from './app';

const authenticatedUser = request.agent(app);

chai.use(chaiHttp);

const userCredentials = {
  email: 'auduhabib1990@gmail.com', 
  password: 'hba821'
};
const registerCredentials = {
  firstName:'lucas',
  lastName:'jesse',
  username:'luje',
  email: 'lucasone@gmail.com', 
  password: 'lucas'
};


describe('users', () => {
  before((done) => {
    authenticatedUser
      .post('/users/login')
      .send(userCredentials)
      .end((err, response) => {
        expect(response.statusCode).to.equal(200);
        done();
      });
  });
  it('it should  post new user', (done) => {
    authenticatedUser
      .post('/users/login')
      .send(userCredentials)
      .expect('Content-type', /json/)
      .expect(200)
      .end((err, res) => {
        expect(res.statusCode).to.equal(200);
        // res.body.error.should.equal('user not found in database');
        done();
      });
  });

   it('it should  return 400 for wrong credentials', (done) => {
    authenticatedUser
      .post('/users')
      .send(registerCredentials)
      .expect('Content-type', /json/)
      .expect(200)
      .end((err, res) => {
        expect(res.statusCode).to.equal(201);
        // res.body.error.should.equal('user not found in database');
        done();
      });
  });
});
