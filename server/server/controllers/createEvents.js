import eventsjson from '../models/events.json';

export default {
create(req,res) {
      if (!req.body.eventType && !req.body.centerSelected && !req.body.id && !req.body.Date && !req.body.Time) {
       return res.json({
         message: 'No recipe added',
         error: true
       });
     }
     eventsjson.push(req.body);
     return res.json({
       message: 'Created successfully',
       error: false
     });
   }
};