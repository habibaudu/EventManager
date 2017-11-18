import eventsjson from '../models/events.json';

export default {
delete(req,res)  {

     for (let i = 0; i < eventsjson.length; i++ ) {
       if (eventsjson[i].id === parseInt(req.params.eventId, 10)) {
         eventsjson.splice(i, 1);
         return res.json({
           message: 'deleted successfully',
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