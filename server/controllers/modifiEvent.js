import models from '../models';

const { Events } = models;

export default {
  update(req, res) {
    const userId = req.decoded.id;
    const { eventType, eventDate } = req.body;

    return Events
      .find({
        where: {
          id: req.params.eventId,

        },
      })
      .then((event) => {
        if (!event) {
          return res.status(404).send({
            message: 'Events Not Found',
          });
        }

        return Events
          .update({
            eventDate: req.body.eventDate || event.eventDate,
            eventType: req.body.eventType || event.eventType,
          })
          .then(() => res.status(200).send(event)) // Send back the updated evnts
          .catch(error => res.status(400).send(error));
      })

      .catch(error => res.status(400).send(error));
  }
};

