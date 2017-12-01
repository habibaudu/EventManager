import models from '../models';

const { Events } = models;

// export default {
//   destroy(req, res) {
//     return Events
//       .findById(req.params.eventId)
//       .then((event) => {
//         if (!event) {
//           return res.status(404).send({
//             message: 'No event By that Id'
//           });
//         }
//         if (req.decoded.userId === req.event.userId) {
//           return event
//             .destroy()
//             .then(() => res.status(200).json({
//               message: 'Event has been Deleted!'
//             }))
//             .catch(error => res.status(400).json({
//               message: error.errors[0].message
//             }));
//         }
//         return res.status(401).json({
//           message: 'You do not have  Authorization to delete this event!'
//         });
//       })
//       .catch(() => res.status(500).json({
//         message: 'Something went wrong with the server'
//       }));
//   }
// };
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
          .then(events => res.status(200).json({ message: 'your Event has been deleted' }))
          .catch(error => res.status(400).send(error));
      }
      )
      .catch(error => res.status(400).send({ message: 'You do not  have Authorization to delete this event' }));
  }
};
