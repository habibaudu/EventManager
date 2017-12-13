import models from '../models';


const { Centers, Events } = models;
export default{
  getAcenter(req, res) {
    Centers
      .findById(req.params.centerId, {
        include: [{
          model: Events,
          as: 'events'
        }]
      })
      .then((center) => {
        if (!center) {
          return res.status(404).json({
            message: 'Center Not Found'
          });
        }
        return res.status(200).json({
          message: 'Center Found',
          center
        });
      });
  }


};
