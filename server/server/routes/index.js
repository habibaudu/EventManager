import addeventControls from '../controllers/createEvents';
import geteventControls from '../controllers/getEvents';
import editeventControls from '../controllers/editevent';
import deleteeventControls from '../controllers/deleteEvent';
import addcenterControls from '../controllers/createCenter';
import getcenterControls from '../controllers/allCenter';
import getacenterControls from '../controllers/aCenter';
import updatecenterControls from '../controllers/updateCenter';

module.exports = (app) => {
  app.get('/api', (req, res) => res.status(200).send({
    message: 'Welcome to the EventManager API!',
  }));
  app.get('/events', geteventControls.getEvents);
  app.post('/events', addeventControls.create);
  app.put('/events/:eventId', editeventControls.eventUpdate);
  app.delete('/events/:eventId', deleteeventControls.delete);
  app.post('/centers', addcenterControls.create);
  app.get('/centers', getcenterControls.getCenters);
  app.get('/centers/:centerId', getacenterControls.getCenter);
  app.put('/centers/:centerId', updatecenterControls.centerUpdate);


  app.all('/center/:centerId/', (req, res) =>
    res.status(405).send({
      message: 'Method Not Allowed',
    }));
};
