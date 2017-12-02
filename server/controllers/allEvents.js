import models from '../models';

const { Events } = models;

export default {
  getEvents(req, res) {
    Events
      .all()
      .then(events => res.status(200).send(events))
      .catch(error => res.status(400).send({ message: 'Events could not be retrievd' }));
  },
};
