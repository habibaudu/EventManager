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
    req.checkBody('roleId', 'roleId must be a number').isInt();
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
    req.checkBody('Location', 'location cannot be null').notEmpty();
   req.checkBody('status', 'status cannot be null, set status as Available or UnAvailable').notEmpty();
    req.checkBody('price', 'price cannot be null').notEmpty();
    req.checkBody('Capacity', 'Capacity cannot be null').notEmpty();
    // req.checkBody('centerName', 'center Name Must be a String').isAlpha();
    // req.checkBody('Location', 'Location Must be a String').isAlpha();
    req.checkBody('Capacity', 'Capacity Must be a number').isInt();
    req.checkBody('price', 'Price must be a number').isInt();
    req.checkBody('Capacity', 'Capacity must be a number').isInt();


    const errormsg = req.validationErrors();
    if (errormsg) {
      res.status(400).send({ message: 'center error', errormsg });
      return;
    }git
    next();
  }

  static Events(req, res, next) {
    req.checkBody('eventType', 'event Type  cannot be null').notEmpty();
     req.checkBody('userId', 'userId cannot be null').notEmpty();
    req.checkBody('eventType', 'event type must be a string').isAlpha();
    req.checkBody('eventDate', 'eventDate cannot be null').notEmpty();
    req.checkBody('centerId', 'centerId must be a number').isInt();
    req.checkBody('userId', 'userId must be a number').isInt();
    const errormsg = req.validationErrors();
    if (errormsg) {
      res.status(400).send({ message: 'events error', errormsg });
      return;
    }
    next();
  }

    static updateEvents(req, res, next) {
    req.checkBody('eventType', 'event Type  cannot be null').notEmpty();
    req.checkBody('eventType', 'event type must be a string').isAlpha();
    req.checkBody('eventDate', 'eventDate cannot be null').notEmpty();
    req.checkBody('centerId', 'centerId must be a number').isInt();
    const errormsg = req.validationErrors();
    if (errormsg) {
      res.status(400).send({ message: 'events error', errormsg });
      return;
    }
    next();
  }
}


export default Check;
