import models from '../models';

const Center = models.Center;
export default {
  modify(req, res) {
    const role = req.decoded.roleId;
    const {
      centerName, Capacity, Location, status, price
    } = req.body;
    return Center
      .findById(req.params.centerId)
      .then((center) => {
        if (!center) {
          return res.status(400).json({
            message: 'Center Not Found!'
          });
        }

        return center
          .update({
            centerName,
            Capacity,
            Location,
            price,
            status
          })
          .then(() => res.status(200).json({
            message: 'Center  was succefully modified',
            center
          }))
          .catch(error => res.status(400).json({
            message: 'error modifying center'
          }));
      })
      .catch(() => res.status(500).json({
        message: 'some error occured'
      }));
  }
};
