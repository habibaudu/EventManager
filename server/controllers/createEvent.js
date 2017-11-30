import models from '../models';

const { Events } = models;

export default {
  createEvents(req, res) {
    const eventPayload = req.body;
    const { userId, eventType, centerId, eventDate } = eventPayload;
    console.log(req.body);
    Events
      .create({ eventType, centerId, eventDate, userId })
      .then(events => res.status(201).send(events))
      .catch(error => res.status(400).send(error));
  },
};

