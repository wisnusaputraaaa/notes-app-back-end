/* eslint-disable import/extensions */
// eslint-disable-next-line import/no-extraneous-dependencies
const Hapi = require('@hapi/hapi');
// eslint-disable-next-line import/no-unresolved, import/no-absolute-path
const routes = require('./routes');

const init = async () => {
  const server = Hapi.server({
    port: 5000,
    host: 'localhost',
    routes: {
      cors: {
        origin: ['*'],
      },
    },
  });
  server.route(routes);

  await server.start();
  console.log(`Server running on ${server.info.uri}`);
};

init();
