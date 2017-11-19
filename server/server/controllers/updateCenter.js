import centersjson from '../models/centers.json';

export default {
centerUpdate(req,res) {
   
     for (let i = 0; i < centersjson.length; i++) {
       if (centersjson[i].id === parseInt(req.params.centerId, 10)) {
         centersjson[i].centerName = req.body.centerName;
         centersjson[i].Capacity = req.body.Capacity;
          centersjson[i].Location = req.body.Location;
         centersjson[i].EventsSlated = req.body.EventsSlated;
         centersjson[i].Facilities = req.body.Facilities;
         centersjson[i].per_Hour = req.body.per_Hour;
         return res.json({
           message: 'sucessfully updated  center',
           error: false
         });
       }
     }
     return res.status(404).json({
       message: 'Center not found',
       error: true
     });
   

   }
};
