import chaiHttp from 'chai-http';
import chai, { expect } from 'chai';
import server from './app';

const should = chai.should();

chai.use(chaiHttp);

describe('Events', () => {
  it('it should GET all Events', (done) => {
    chai.request(server)
      .get('/events')
      .end((err, res) => {
        res.should.have.status(200);
        res.body.should.be.a('object');
        done();
      });
  });
  it('it should create an Event', (done) => {
    chai.request(server)
      .post('/events')
      .end((err, res) => {
        res.should.have.status(200);
        res.body.should.be.a('object');
        expect(res.body.message).to.equal('No Event added');
        done();
      });
  });

  it('should edit an event', (done) => {
    chai.request(server)
      .put('/events/3')
      .end((err, res) => {
        res.should.have.status(200);
        res.body.should.be.a('object');
        expect(res.body.message).to.equal('sucessfully updated  event');
        done();
      });
  });
  it('should delete an event', (done) => {
    chai.request(server)
      .delete('/events/1')
      .end((err, res) => {
        should.equal(err, null);
        res.should.have.status(200);
        res.body.should.be.a('object');
        expect(res.body.message).to.equal('successfully deleted event');
        done();
      });
  });


  it('it should GET all Centers', (done) => {
    chai.request(server)
      .get('/centers')
      .end((err, res) => {
        res.should.have.status(200);
        res.body.should.be.a('object');
        done();
      });
  });
  it('it should create a Center', (done) => {
    chai.request(server)
      .post('/centers')
      .end((err, res) => {
        res.should.have.status(200);
        res.body.should.be.a('object');
        expect(res.body.message).to.equal('No Center added');
        done();
      });
  });

  it('should edit a Center', (done) => {
    chai.request(server)
      .put('/centers/3')
      .end((err, res) => {
        res.should.have.status(200);
        res.body.should.be.a('object');
        expect(res.body.message).to.equal('sucessfully updated  center');
        done();
      });
  });
});
