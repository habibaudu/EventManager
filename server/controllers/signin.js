import express from 'express';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import config from '../configkey/key';
import models from '../models';

const app = express();
app.set('superSecret', config.secret);

const User = models.Users;
export default{
  login(req, res) {
    let message;
    User
      .findOne({ where: {
        email: req.body.email
      } }).then((user) => {
        if (bcrypt.compareSync(req.body.password, user.password)) {
          // create token
          const token = jwt.sign({
            password: user.password
          }, app.get('superSecret'), { expiresIn: 86400 }
          );
          message = 'Login was successful';
          return res.status(200).send({
            message,
            token
          });
        }
        message = 'Incorrect password or email';
        return res.status(400).send({ message });
      })
      .catch(error => res.status(400).send({ message: 'user not found in database' }));
  }


};

