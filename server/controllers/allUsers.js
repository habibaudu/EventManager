import models from '../models';

const { Users } = models;

export default {
  getusers(req, res) {
    Users
      .all()
      .then(users => res.status(200).send(users))
      .catch(error => res.status(400).send({ message: 'could not get users' }));
  },
};