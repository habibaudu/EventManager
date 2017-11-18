import addeventControls from '../controllers/createEvents.js';
import geteventControls from '../controllers/getEvents.js';
import editeventControls from '../controllers/Editevent.js';
 module.exports = (app) => {
  
   app.get('/api', (req, res) => res.status(200).send({
     message: 'Welcome to the EventManager API!',
   }));
     app.get('/events',geteventControls.getEvents); 
     app.post('/events',addeventControls.create);
     app.put('/events/:eventId',editeventControls.eventUpdate);

   app.all('/center/:centerId/', (req, res) =>
     res.status(405).send({
       message: 'Method Not Allowed',
     }));
};
