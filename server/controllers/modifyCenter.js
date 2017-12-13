import models from '../models';

const Centers = models.Centers;
export default {
  modify(req, res) {
    const userId = req.decoded.id;
    if (userId !== 1) {
      return res.json({ message: 'Only an admin can edit a center' });
    }
    const {
      centerName, capacity, location, image, isAvailable, price
    } = req.body;
    return Centers
      .findById(req.params.centerId)
      .then((center) => {
        if (!center) {
          return res.status(404).json({
            message: 'Center Not Found!'
          });
        }
        return center
          .update({
            centerName,
            capacity,
            location,
            price,
            image,
            isAvailable
          })
          .then(modifiedCenter => res.status(200).json({
            message: 'Center  modified  successfully',
            modifiedCenter
          }))
          .catch(error => res.status(400).json({
            message: 'center not updated'
          }));
      });
  }
};
