import addeventControls from '../controllers/createEvents.js';
import geteventControls from '../controllers/getEvents.js';
import editeventControls from '../controllers/Editevent.js';
import deleteeventControls from '../controllers/deleteEvent.js';
import addcenterControls from '../controllers/createCenter.js';
import getcenterControls from '../controllers/allCenter.js';
import getacenterControls from '../controllers/aCenter.js';
import updatecenterControls from '../controllers/updateCenter.js';

 module.exports = (app) => {
  
   app.get('/api', (req, res) => res.status(200).send({
     message: 'Welcome to the EventManager API!',
   }));
     app.get('/events',geteventControls.getEvents); 
     app.post('/events',addeventControls.create);
     app.put('/events/:eventId',editeventControls.eventUpdate);
     app.delete('/events/:eventId',deleteeventControls.delete);
     app.post('/centers',addcenterControls.create);
      app.get('/centers',getcenterControls.getCenters);
      app.get('/centers/:centerId',getacenterControls.getCenter);
       app.put('/centers/:centerId',updatecenterControls.centerUpdate);
       

   app.all('/center/:centerId/', (req, res) =>
     res.status(405).send({
       message: 'Method Not Allowed',
     }));
};
