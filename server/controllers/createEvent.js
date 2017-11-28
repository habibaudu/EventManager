import models from '../models';

const Event = models.Events;
console.log(models.Events);

export default {
  createEvents(req, res) {
    console.log(req.body);
    const { eventType, centerId, dates } = req.body;
    return Event
      .create({ eventType, centerId, dates })
      .then(events => res.status(201).send(events))
      .catch(error => res.status(400).send(error));
  },
};

