import models from '../models';

const { Events } = models;

export default {
  destroy(req, res) {
    console.log(req.decoded.id);
    return Events
      .findById(req.params.eventId)
      .then((events) => {
        if (!events) {
          return res.status(404).send({
            message: 'Events Not Found',
          });
        }

        return events
          .destroy()
          .then(() => res.status(200).json({ message: 'your Event has been deleted' }))
          .catch(error => res.status(400).send(error));
      }
      )
      .catch(error => res.status(400).send({ message: 'Event not deleted' }));
  }
};
