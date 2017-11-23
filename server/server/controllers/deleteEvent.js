import eventsjson from '../models/events.json';
/**
 *
 */
export default class deleteanevent {
  /**
   * @param {req} -users request
   * @param {res} -servers response
   * @return {json} - reurns json object indicating sucess or failure
   */
  static delete(req, res) {
    for (let i = 0; i < eventsjson.length; i++) {
      if (eventsjson[i].id === parseInt(req.params.eventId, 10)) {
        eventsjson.splice(i, 1);
        return res.json({
          message: 'successfully deleted event',
          error: false
        });
      }
    }

    return res.status(404).json({
      message: 'Event not found',
      error: true
    });
  }

};
