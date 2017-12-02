import controller from '../controllers';
import auth from '../auth/authroutes';
import Check from './validation';

const signinControllers = controller.signin;
const signupControllers = controller.signup;
const createEventControllers = controller.createEvent;
const createCenterControllers = controller.createCenter;
const allCenterControllers = controller.allCenter;
const getacenterControllers = controller.aCenter;
const modifycenterControllers = controller.modifyCenter;
const modifieventControllers = controller.modifiEvent;
const deleteControllers = controller.deleteEvents;
const allEventsControllers = controller.allEvents;
const allUsersControllers = controller.allUsers;



module.exports = (app) => {
  app.get('/api', (req, res) => res.status(200).send({
    message: 'Welcome to EventManager App!',
  }));

  app.post('/api/users', Check.signup, signupControllers.register);
  app.post('/api/users/login', Check.signin, signinControllers.login);
  app.put('/api/events/:eventId', auth, Check.Events, modifieventControllers.update);
  app.post('/api/events', auth, Check.updateEvents, createEventControllers.createEvents);
  app.post('/api/centers', auth, Check.center, createCenterControllers.createCenter);
  app.delete('/api/events/:eventId', auth, deleteControllers.destroy);
  app.get('/api/centers', auth, allCenterControllers.getCenter);
  app.get('/api/centers/:centerId', auth, getacenterControllers.getAcenter);
  app.put('/api/centers/:centerId', auth, modifycenterControllers.update);
  app.get('/api/events', allEventsControllers.getEvents);
   app.get('/api/users', allUsersControllers.getusers);


  app.all('/api/signup/users', (req, res) =>
    res.status(405).send({
      message: 'Method Not Allowed',
    }));
};
