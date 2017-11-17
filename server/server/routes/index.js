
 module.exports = (app) => {
   let sortedDate;
   app.get('/api', (req, res) => res.status(200).send({
     message: 'Welcome to the EventManager API!',
   }));

   app.all('/center/:centerId/', (req, res) =>
     res.status(405).send({
       message: 'Method Not Allowed',
     }));
};
