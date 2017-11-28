import models from '../models';

const Centers = models.Center;
console.log(models.Centers);
console.log(typeof Centers);
export default {
  createCenter(req, res) {
    console.log(req.body);
    const { centerName, userId, Location, Facilities, } = req.body;
      console.log(req.body.centerName);
    return Centers
      .create({ centerName, userId, Location, Facilities, })
      .then(center => res.status(201).send(center))
      .catch(error => res.status(400).send(error));
  },
};

