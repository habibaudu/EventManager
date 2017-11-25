import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import models from '../models';

const User = models.Users;

export default {
  register(req, res) {
     const password = bcrypt.hashSync(req.body.password, 10);
    return User
      .create({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        username: req.body.username,
        password,
        email: req.body.email
      })
      .then(user => res.status(201).send({ firstname: user.firstName,
        lastname: user.lastName,
        username: user.username,
        email: user.email, }))
      .catch(error => res.status(400).send(error));
  }

};
