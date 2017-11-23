import eventsjson from '../models/events.json';
/**
 *
 */
export default class updateanevent {
  /**
   * @param {req} - users resquest
   * @param {res} -servers response
   * @return {JSON} - json object,indicating sucess or failure
   */
  static eventUpdate(req, res) {
    for (let i = 0; i < eventsjson.length; i++) {
      if (eventsjson[i].id === parseInt(req.params.eventId, 10)) {
        eventsjson[i].eventType = req.body.eventType;
        eventsjson[i].centerSelected = req.body.centerSelected;
        eventsjson[i].Date = req.body.Date;
        eventsjson[i].Time = req.body.Time;
        return res.json({
          message: 'sucessfully updated  event',
          error: false
        });
      }
    }
    return res.status(404).json({
      message: 'Event not found',
      error: true
    });
  }
}
