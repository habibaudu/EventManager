import centersjson from '../models/centers.json';

export default {
getCenter(req,res) {
     for (let i = 0; i < centersjson.length; i++) {
       if (centersjson[i].id === parseInt(req.params.centerId, 10)) {
            
        let id=centersjson[i].id;
        let centerName=centersjson[i].centerName;
        let  Capacity=centersjson[i].Capacity; 
        let Locations=centersjson[i].Location;
        let EventsSlated = centersjson[i].eventsSlated;
        let  Facilities= centersjson[i].Facilities;
        let per_Hour=centersjson[i].per_Hour;

let oneCenter=[
  {
    "id":id,
    "centerName":centerName,
    "Capacity":Capacity,
    "Location":Locations,
    "EventsSlated":EventsSlated,
    "Facilities":Facilities,
    "per_Hour":per_Hour
  }
           ]
        
           return res.json({
           center:oneCenter,
           error:false
           });
      
       }
     }
     return res.status(404).json({
       message: 'Center not found',
       error: true
     });
   

   }
};
