/* eslint-disable no-console */
const logger = require('./logger');
const app = require('./app');
const port = app.get('port');
const server = app.listen(port);

process.on('unhandledRejection', (reason, p) =>
  logger.error('Unhandled Rejection at: Promise ', p, reason)
);

server.on('listening', () => {
  const now = new Date();
  logger.info(now.toLocaleDateString() + ' ' + now.toLocaleTimeString() + ' | Triplog API server started on http://%s:%d', app.get('host'), port)
});
