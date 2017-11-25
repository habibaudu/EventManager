
login(req, res) {
    User
      .findOne({ where: {
        email: req.body.email
      } }).then((user) => {
        if (bcrypt.compareSync(req.body.password, user.password)) {
          const token = jwt.sign({
            username: user.username
          }, secret, { expiresIn: 86400 }
          );
          return res.status(200).send({
            message: 'success',
            token
          });
        }
        return res.status(400).send({ message: 'incorrect login details' });
      })
      .catch(error => res.status(400).send({ message: 'user not found in database' }));
  }
  