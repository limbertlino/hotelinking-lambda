const createEvent = (name = null) => ({
  httpMethod: 'GET',
  path: '/greeting',
  headers: {
    'Content-Type': 'application/json',
  },
  queryStringParameters: name ? { name } : null,
});

module.exports = {
  eventWithName: createEvent('jose'),
  eventWithoutName: createEvent(),
};
