import models from '../models';

const { Events, Centers } = models;

export default {
  createEvents(req, res) {
    const { eventType, centerId, eventDate, } = req.body;

    return Centers
      .findOne({
        where: {
          id: req.body.centerId,
          isAvailable: true
        }
      })
      .then((found) => {
        if (!found) {
          return res.status(404).json({
            message: 'center is currently not available'
          });
        }
        return Events
          .findOne({
            where: {
              centerId,
              eventDate
            }
          })
          .then((eventFound) => {
            if (eventFound) {
              return res.status(400).json({
                message: 'Center has been booked'
              });
            }
            return Events
              .create({
                userId: req.decoded.id,
                centerId: req.body.centerId,
                eventType,
                eventDate
              })
              .then(created => res.status(201).json({
                message: 'Event Created!',
                createdEvent: {
                  date: created.eventDate,
                  type: created.eventType
                }
              }))
              .catch(error => res.status(400).send(error.toString()
              ));
          });
      });
  }
};

