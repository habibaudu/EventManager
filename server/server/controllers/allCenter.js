import centersjson from '../models/centers.json';

export default {
getCenters(req,res) {

       return res.json({
         Centers: centersjson,
         error: false
       });
   }
   
}
