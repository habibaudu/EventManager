import eventsjson from '../models/events.json';
 /**
  * 
  */
export default class getallEvents {
  /**
   * @param {req} - request for the user
   * @param {res} - response from server
   * @param {json} - returns Json object containing all ur events
   * 
   */
  static getEvents(req, res) {
    return res.json({
      events: eventsjson,
      error: false
    });
  }
}
