import { Center } from '../models';

export default {
  createCenter(req, res) {
    const newCenter = req.body;
    // const { centerName, userId, Location, Facilities } = newCenter;
    Center.create(newCenter)
      .then((center) => {
        console.log('center: ', center);
        // res.status(201).send(center);
      });
      // .catch((error) => {
      //   res.status(400).json('center not created');
      // });
  },
};

