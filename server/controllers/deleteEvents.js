import models from '../models';

const { Events } = models;

export default {
  destroy(req, res) {
    return Events
      .findById(req.params.eventId)
      .then((event) => {
        if (!event) {
          return res.status(404).json({
            message: 'Event Not Found'
          });
        }
        if (req.decoded.id === event.userId) {
          return event
            .destroy()
            .then(() => res.status(200).json({
              message: 'Event Has been  Deleted!'
            }))
            .catch(error => res.status(400).json({
              message: 'Event was not deleted'
            }));
        }
        return res.status(401).json({
          message: 'You do not have Authorization to delete this event!'
        });
      })
      .catch(error => res.status(500).json(error.toString()
      ));
  }
};
