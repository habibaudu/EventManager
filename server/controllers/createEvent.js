import models from '../models';

const { Events, Center } = models;

export default {
  createEvents(req, res) {
    const { eventType, centerId, eventDate, userId } = req.body;

    return Center
      .findOne({
        where: {
          id: req.body.centerId,
          status: 'Available'
        }
      })
      .then((centerFound) => {
        if (!centerFound) {
          return res.status(404).json({
            message: 'Center is not Available'
          });
        }
        return Events
          .findOne({
            where: {
              centerId: req.body.centerId,
              eventDate
            }
          })
          .then((eventFound) => {
            if (eventFound) {
              return res.status(400).json({
                message: 'Center is taken'
              });
            }
            return Events
              .create({
                userId: req.body.userId,
                centerId: req.body.centerId,
                eventType,
                eventDate
              })
              .then(events => res.status(201).json({
                message: 'Event Created succesfull',
                eventDate: events.eventDate,
                eventType: events.eventType

              }))
              .catch(error => res.status(400).json({
                message: error.errors[0].message
              }));
          });
      });
  }
};

