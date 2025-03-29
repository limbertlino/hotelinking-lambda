exports.greeting = async (event) => {
  console.log('Event', event);
  return{
    statusCode: 200,
    body: 'Hello'
  }
};
