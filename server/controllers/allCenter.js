import models from '../models';

const Centers = models.Centers;
export default {
  getCenter(req, res) {
    Centers
      .all()
      .then(center => res.status(200).send(center))
      .catch(error => res.status(400).send(error));
  },
};

