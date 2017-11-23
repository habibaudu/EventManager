import centersjson from '../models/centers.json';
/**
 *
 */
export default class getallCenter {
  /**
    *@param{req} -returns request object
    *@param{res} -returns response object
    *@return{json} -returns a json object of all centers
    */
  static getCenters(req, res) {
    return res.json({
      Centers: centersjson,
      error: false
    });
  }
}
