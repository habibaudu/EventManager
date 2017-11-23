import eventsjson from '../models/events.json';
/**
 *
 */
export default class CreateEvent {

 
 /**
  *@param {*} req
  *@param {*} res
  *@return {json} dfggg
  */
 static create(req, res) {
    if (!req.body.eventType || !req.body.centerSelected || !req.body.id || !req.body.Date || !req.body.Time) {
      return res.json({
        message: 'No Event added, fill in the required filleds',
        error: true
      });
    }
    const date = req.body.Date;
    if (Date.parse(date)) {
      eventsjson.push(req.body);
      return res.json({
        message: 'Event Created successfully',
        error: false
      });
    }
    return res.json({
      message: 'wrong format, enter in dd/mm/yy',
      error: true
    });
  }
}
