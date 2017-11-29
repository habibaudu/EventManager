import controller from '../controllers';

const signinControllers = controller.signin;
const signupControllers = controller.signup;
const createEventControllers = controller.createEvent;
const createCenterControllers = controller.createCenter;
const allCenterControllers = controller.allCenter;
const getacenterControllers = controller.aCenter;
const modifycenterControllers = controller.modifyCenter;


module.exports = (app) => {
  app.get('/api', (req, res) => res.status(200).send({
    message: 'Welcome to EventManager App!',
  }));

  app.post('/api/users', signupControllers.register);
  app.post('/api/users/login', signinControllers.login);
  app.post('/api/events', createEventControllers.createEvents);
  app.post('/api/centers', createCenterControllers.createCenter);
  app.get('/api/centers', allCenterControllers.getCenter);
  app.get('/api/centers/:centerId', getacenterControllers.getAcenter);
  app.put('/api/centers/:centerId', modifycenterControllers.update);


  app.all('/api/signup/users', (req, res) =>
    res.status(405).send({
      message: 'Method Not Allowed',
    }));
};
