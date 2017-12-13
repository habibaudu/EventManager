import models from '../models';

const { Events } = models;

export default {
  update(req, res) {
    const { eventType, eventDate } = req.body;

    return Events
      .findById(req.params.eventId)
      .then((event) => {
        if (!event) {
          return res.status(400).json({
            message: 'Event Not Found!'
          });
        }
        if (req.decoded.id === event.userId) {
          return Events
            .findOne({
              where: {
                centerId: req.body.centerId,
                eventDate
              }
            })
            .then((Eventss) => {
              if (Eventss) {
                return res.status(400).json({
                  message: 'Center has been booked'
                });
              }
              return event
                .update({

                  centerId: req.body.centerId,
                  eventDate: eventDate || event.eventDate,
                  eventType: eventType || event.eventType
                })
                .then(ModifiedEvent => res.status(200).json({
                  ModifiedEvent,
                  message: 'Event Has been Modified'
                }))
                .catch(error => res.status(400).json({
                  message: 'Event was not modified'
                }));
            });
        }
        return res.status(401).json({
          message: 'You do not have  Authorization to modify this event!'
        });
      })
      .catch(error => res.status(500).json(error.toString()

      ));
  }
};

