import { Centers } from '../models';

export default {
  createCenter(req, res) {
    const userId = req.decoded.id;
    if (userId !== 1) {
      return res.json({ message: 'Only an admin can create a center' });
    }

    return Centers
      .create({
        centerName: req.body.centerName,
        capacity: req.body.capacity,
        location: req.body.location,
        image: req.body.image,
        isAvailable: req.body.isAvailable,
        price: req.body.price
      })
      .then(center => res.status(201).send({
        message: 'Center created sucessfully',
        center
      }))
      .catch(error => res.status(400).send(error.toString()));
  }

};

