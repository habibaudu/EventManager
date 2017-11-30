import express from 'express';
import http from 'http';
import logger from 'morgan';
import bodyParser from 'body-parser';

const expressValidator = require('express-validator');
/**
 * set up app server
 */

const app = express();


/**
 * log request to the console
 */

app.use(logger('dev'));

/**
 * Parsing incomming data request
 */

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: false }));
app.use(expressValidator());


/**
 * created my server using http.createServer
 * @param {app} - express app
 * set port to 4000
 * @param {integer} - port number
 * server.listen(port)
 * @param {integer} -Binds and listens for connections on port 4000
 * @param {function} - callback function that console port number
 */
const port = parseInt(process.env.PORT, 10) || 4000;
app.set('port', port);

const server = http.createServer(app);
server.listen(port, () => {
  console.log(`server started and runing on port ${port}`);
});

require('./routes')(app);

app.get('*', (req, res) => res.status(200).send({ message: 'Welcome To EventManager Api',
})

);

export default app;

