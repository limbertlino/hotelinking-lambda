const { generateGreeting } = require('../services/greetingService');

exports.greeting = async (event) => {
  try {
    console.info('Event Received', JSON.stringify(event, null, 2));

    let name = event?.queryStringParameters?.name;

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
  } catch (error) {
    console.error('Error:', error);

    return {
      statusCode: 500,
      headers: {
        'Content-Type': 'text/html',
      },
      body: '<html><body><h1>Error interno del servidor</h1></body></html>',
    };
  }
};
