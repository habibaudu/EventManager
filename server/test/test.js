import chaiHttp from 'chai-http';
import chai, { expect } from 'chai';
import request from 'supertest';
import app from '../app';

const authenticatedUser = request.agent(app);

chai.use(chaiHttp);

const userCredentials = {
  email: 'auduhabib@gmail.com',
  password: 'hba821'
};
const wrongCredentials = {
  email: 'wrongemail@gmail.com',
  password: 'wrong123'
};
const halfrightCredentials = {
  email: 'auduhabib1990@gmail.com',
  password: 'wrong123'
};
const registerCredentials = {
  firstName: 'lucas',
  lastName: 'jesse',

  roleId: 2,
  email: 'lucason@gmail.com',
  password: 'lucas'
};
const sentCredentials = {
  firstname: 'lucas',
  lastname: 'jesse',
  roleId: 2,
  email: 'lucasone@gmail.com'
};
const incompleteregisterCredentials = {
  firstName: 'lucas',
  lastName: 'jesse',
  email: 'lucasone@gmail.com',
  roleId: 2,
  password: 'lucas'
};


describe('users', () => {
  before((done) => {
    authenticatedUser
      .post('/api/users/login')
      .send(userCredentials)
      .end((err, response) => {
        expect(response.statusCode).to.equal(200);
        done();
      });
  });
  it('it should  post new user', (done) => {
    authenticatedUser
      .post('/api/users/login')
      .send(userCredentials)
      .expect('Content-type', /json/)
      .expect(200)
      .end((err, res) => {
        expect(res.statusCode).to.equal(200);
        done();
      });
  });

  it('it should  return 400 for wrongCredential ', (done) => {
    authenticatedUser
      .post('/api/users/login')
      .send(wrongCredentials)
      .expect('Content-type', /json/)
      .expect(400)
      .end((err, res) => {
        expect(res.statusCode).to.equal(400);
        done();
      });
  });
  it('it should  return 400 for half_rightCredentials', (done) => {
    authenticatedUser
      .post('/api/users/login')
      .send(halfrightCredentials)
      .expect('Content-type', /json/)
      .expect(400)
      .end((err, res) => {
        expect(res.statusCode).to.equal(400);
        done();
      });
  });
  it('it should  return Incorrect password or email', (done) => {
    authenticatedUser
      .post('/api/users/login')
      .send(halfrightCredentials)
      .expect('Content-type', /json/)
      .expect(400)
      .end((err, res) => {
        expect(res.body.message).to.equal('Incorrect password or email');
        done();
      });
  });

  it('it should  return user not found in database', (done) => {
    authenticatedUser
      .post('/api/users/login')
      .send(wrongCredentials)
      .expect('Content-type', /json/)
      .expect(400)
      .end((err, res) => {
        expect(res.body.message).to.equal('user not found in database');
        done();
      });
  });
  it('it should  return Login was successful for good credentials', (done) => {
    authenticatedUser
      .post('/api/users/login')
      .send(userCredentials)
      .expect('Content-type', /json/)
      .expect(201)
      .end((err, res) => {
        expect(res.body.message).to.equal('Login was successful');
        done();
      });
  });


  it('it should  return 201 for uersCredentials', (done) => {
    authenticatedUser
      .post('/api/users')
      .send(registerCredentials)
      .expect('Content-type', /json/)
      .expect(200)
      .end((err, res) => {
        expect(res.statusCode).to.equal(201);
        done();
      });
  });
  it('it should  return the credentials used to register excluding password', (done) => {
    authenticatedUser
      .post('/api/users')
      .send(registerCredentials)
      .expect('Content-type', /json/)
      .expect(200)
      .end((err, res) => {
        expect(res.body).to.deep.equal(sentCredentials);
        done();
      });
  });
  it('it should  return 400 for ignoring some filleds', (done) => {
    authenticatedUser
      .post('/api/users')
      .send(incompleteregisterCredentials)
      .expect('Content-type', /json/)
      .expect(400)
      .end((err, res) => {
        expect(res.statusCode).to.equal(400);
        done();
      });
  });
});
