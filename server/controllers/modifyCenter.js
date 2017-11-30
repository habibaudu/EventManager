import models from '../models';

const Center = models.Center;
export default {
  update(req, res) {
    return Center
      .find({
        where: {
          id: req.params.centerId,

        },
      })
      .then((center) => {
        if (!center) {
          return res.status(404).send({
            message: 'Center Not Found',
          });
        }

        console.log(`center = ${typeof center}`);
        console.log('=========');
        console.log(center.status);

        return Center
          .update({
            status: req.body.status,

            price: req.body.price,
            Capacity: req.body.Capacity,
            Location: req.body.Location,
            centeName: req.body.centerName

          })
          .then(c => res.status(200).send(c))
          .catch(error => res.status(400).send(error));
      })

      .catch((error) => {
        console.log('getting to this point...');
        console.log(error);
        res.status(400).send(error);
      });
  },

};
