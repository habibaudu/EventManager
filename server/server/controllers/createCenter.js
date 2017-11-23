import centersjson from '../models/centers.json';
/**
 * @param{req} -request from the user
 * @param{res} -response from the server
 * @return{json} -return a json object, indicating success or failure
 */
export default class creataCenter {
  /**
   * 
   */
 static create(req, res) {
    if (!req.body.centerName && !req.body.Capacity && !req.body.id && !req.body.Location && !req.body.EventsSlated &&
    !req.body.Facilities && !req.body.per_Hour) {
      return res.json({
        message: 'No Center added',
        error: true
      });
    }
    centersjson.push(req.body);
    return res.json({
      message: 'Center successfully created',
      error: false
    });
  }
};
