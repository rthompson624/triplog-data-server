require('dotenv').config();
if (!process.env.NODE_ENV) {
  console.log('NODE_ENV environment variable not defined!');
} else {
  console.log('Environment: ' + process.env.NODE_ENV);
}

/* eslint-disable no-console */
const logger = require('./logger');
const app = require('./app');
let portVar;
if (process.env.NODE_ENV === 'staging' || process.env.NODE_ENV === 'production') {
  portVar = process.env.PORT;
  console.log('Heroku environment detected. Using port ' + portVar);
} else {
  portVar = app.get('port');
  console.log('Local environment detected. Using port ' + portVar);
}
const port = portVar;
const server = app.listen(port);

process.on('unhandledRejection', (reason, p) =>
  logger.error('Unhandled Rejection at: Promise ', p, reason)
);

server.on('listening', () => {
  const now = new Date();
  logger.info(now.toLocaleDateString() + ' ' + now.toLocaleTimeString() + ' | Triplog API server started on http://%s:%d', app.get('host'), port)
});
