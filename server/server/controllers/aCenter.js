import centersjson from '../models/centers.json';
/**
 * 
 */

export default class getaparticularCenter{
  /**
   * @param {req} -users request
   *  @param {res} -servers response
   * @return {json} -Json object of a center details
   */

  static getCenter(req, res) {
    for (let i = 0; i < centersjson.length; i++) {
      if (centersjson[i].id === parseInt(req.params.centerId, 10)) {
        const id = centersjson[i].id;
        const centerName = centersjson[i].centerName;
        const Capacity = centersjson[i].Capacity;
        const Locations = centersjson[i].Location;
        const EventsSlated = centersjson[i].eventsSlated;
        const Facilities = centersjson[i].Facilities;
        const per_Hour = centersjson[i].per_Hour;

        const oneCenter = [
          {
            id,
            centerName,
            Capacity,
            Location: Locations,
            EventsSlated,
            Facilities,
            per_Hour
          }
        ];

        return res.json({
          center: oneCenter,
          error: false
        });
      }
    }
    return res.status(404).json({
      message: 'Center not found',
      error: true
    });
  }
}
