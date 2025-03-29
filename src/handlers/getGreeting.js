const { generateGreeting } = require('../services/greetingService');

exports.greeting = async (event) => {
  console.info('Event Received', JSON.stringify(event, null, 2));

  let name = event?.queryStringParameters?.name || 'Usuario desconocido';

  const { html, statusCode } = generateGreeting(name);

  const response = {
    statusCode,
    headers: {
      'Content-Type': 'text/html',
    },
    body: html,
  };

  console.info('Response: ', {
    path: event.path,
    statusCode: response.statusCode,
    body: response.body,
  });

  return response;
};
