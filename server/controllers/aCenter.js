import models from '../models';


const Center = models.Center;
export default{
  getAcenter(req, res) {
    Center
      .findOne({ where: {
        id: req.params.centerId,
      }
      }).then(center => res.status(200).send(center))
      .catch(error => res.status(400).send({ message: 'Center Not found' }));
  }


};
