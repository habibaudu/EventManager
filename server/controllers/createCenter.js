import { Center } from '../models';


export default {
  createCenter(req, res) {
 
    return Center
      .create({
        centerName: req.body.centerName,
        Capacity: req.body.Capacity,
        Location: req.body.Location,
        price: req.body.price
      })
      .then(center => res.status(201).send({ message: 'Center created sucessful' }))
      .catch(error => res.status(400).send({ message: 'Center Not creatde'
      }));
  }

};

