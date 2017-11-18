import eventsjson from '../models/events.json';

export default {
eventUpdate(req,res) {
     for (let i = 0; i < eventsjson.length; i++) {
       if (eventsjson[i].id === parseInt(req.params.eventId, 10)) {
         eventsjson[i].eventType = req.body.eventType;
         eventsjson[i].centerSelected = req.body.centerSelected;
         eventsjson[i].Date = req.body.Date;
         eventsjson[i].Time = req.body.Time;
         return res.json({
           message: 'updated sucessfully',
           error: false
         });
       }
     }
     return res.status(404).json({
       message: 'Recipe not found',
       error: true
     });
   

   }
};
