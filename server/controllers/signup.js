import bcrypt from 'bcryptjs';
import models from '../models';


const User = models.Users;

export default {
  register(req, res) {
    const password = bcrypt.hashSync(req.body.password, 10);

    return User
      .create({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        password,
        email: req.body.email,
        roleId: req.body.roleId
      })
      .then(user => res.status(201).send({ firstname: user.firstName,
        lastname: user.lastName,
        roleId: user.roleId,
        email: user.email }))
      .catch(error => res.status(400).send({ message: 'Email  Already in Use'
      }));
  }

};
