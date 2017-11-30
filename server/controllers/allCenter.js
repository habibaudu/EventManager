import models from '../models';

const Center = models.Center;
export default {
  getCenter(req, res) {
    Center
      .all()
      .then(center => res.status(200).send(center)) 
      .catch(error => res.status(400).send(error));
  },
};

