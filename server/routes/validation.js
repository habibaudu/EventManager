/**
 * @class Check
 */

class Check {
  static signup(req, res, next) {
    req.checkBody('firstName', 'first name cannot be null').notEmpty();
    req.checkBody('lastName', 'last name cannot be null').notEmpty();
    req.checkBody('password', 'password cannot be null').notEmpty();
    req.checkBody('firstName', 'first name Must be a String').isAlpha();
    req.checkBody('lastName', 'first name Must be a String').isAlpha();
    req.checkBody('password', 'password must contain either letters or number').isAlphanumeric();
    req.checkBody('email', 'email cannot be null').notEmpty();
    const errormsg = req.validationErrors();
    if (errormsg) {
      res.status(400).send({ message: 'signup error', errormsg });
      return;
    }
    next();
  }

  static signin(req, res, next) {
    req.checkBody('password', 'password cannot be null').notEmpty();
    req.checkBody('password', 'password must contain either letters or number').isAlphanumeric();
    req.checkBody('email', 'email cannot be null').notEmpty();
    const errormsg = req.validationErrors();
    if (errormsg) {
      res.status(400).send({ message: 'login error', errormsg });
      return;
    }
    next();
  }

  static center(req, res, next) {
    req.checkBody('centerName', 'center Name cannot be null').notEmpty();
    req.checkBody('location', 'location cannot be null').notEmpty();
   req.checkBody('isAvailable', 'isAvailable cannot be null, set value as true or false').notEmpty();
    req.checkBody('price', 'price cannot be null').notEmpty();
    req.checkBody('capacity', 'Capacity cannot be null').notEmpty();
    // req.checkBody('centerName', 'center Name Must be a String').isAlpha();
    // req.checkBody('Location', 'Location Must be a String').isAlpha();
    req.checkBody('capacity', 'Capacity Must be a number').isInt();
    req.checkBody('price', 'Price must be a number').isInt();

    const errormsg = req.validationErrors();
    if (errormsg) {
      res.status(400).send({ message: 'center error', errormsg });
      return;
    }
    next();
  }

  static Events(req, res, next) {
    req.checkBody('eventType', 'event Type  cannot be null').notEmpty();
 
    req.checkBody('eventDate', 'eventDate cannot be null').notEmpty();

    const errormsg = req.validationErrors();
    if (errormsg) {
      res.status(400).send({ message: 'events error', errormsg });
      return;
    }
    next();
  }

    static updateEvents(req, res, next) {
    req.checkBody('eventType', 'event Type  cannot be null').notEmpty();

    req.checkBody('eventDate', 'eventDate cannot be null').notEmpty();
    const errormsg = req.validationErrors();
    if (errormsg) {
      res.status(400).send({ message: 'events error', errormsg });
      return;
    }
    next();
  }
}


export default Check;
