import eventsjson from '../models/events.json';

export default {
getEvents(req,res) {

       return res.json({
         events: eventsjson,
         error: false
       });
   }
   
}
