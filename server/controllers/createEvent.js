import models from '../models';

const Events = models.Events;
console.log(models.Events);

export default {
  createEvents(req, res) {
    return Events
      .create({
        eventType: req.body.eventType,
        centerId: req.body.centerId,
        dates: req.body.dates
      })
      .then(events => res.status(201).send(events))
      .catch(error => res.status(400).send('not created'));
  },
};

