import models from '../models';


const Role = models.Role;

export default {
  addRole(req, res) {
    return Role
      .create({

        role: req.body.role
      })
      .then(role => res.status(201).send({ role }))
      .catch(error => res.status(400).send({ message: 'No roles added'
      }));
  }

};
