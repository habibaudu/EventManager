import models from '../models';

const { Events, Center } = models;

export default {
  update(req, res) {
    const userId = req.decoded.id;
    const { eventType, centerId, eventDate } = req.body;
    return Events
      .findById(req.params.eventId)
      .then((event) => {
        if (!event) {
          return res.status(400).event({
            message: 'No event by that ID'
          });
        }
        if (userId === req.event.userId) {
          return Events
            .findOne({
              where: {
                centerId: req.body.centerId,
                eventDate
              }
            })
            .then((events) => {
              if (events) {
                return res.status(400).send({
                  message: 'Center Taken'
                });
              }
              return events
                .update({
                  eventDate,
                  eventType,
                })
                .then(events => res.status(200).send({
                  message: 'Event has been modified',
                  events
                }))
                .catch(error => res.status(400).send({
                  message: 'events was not modified'
                }));
            });
        }
        return res.status(401).send({
          message: 'Only event owner is authorize to modify event!'
        });
      })
      .catch(() => res.status(500).send({
        message: 'some error occured'
      }));
  }

};

