import controller from '../controllers';

const signinControllers = controller.signin;
const signupControllers = controller.signup;
module.exports = (app) => {
  app.get('/api', (req, res) => res.status(200).send({
    message: 'Welcome to EventManager App!',
  }));

  app.post('/users', signupControllers.register);
  app.post('/users/login', signinControllers.login);

  app.all('/api/signup/users', (req, res) =>
    res.status(405).send({
      message: 'Method Not Allowed',
    }));
};
