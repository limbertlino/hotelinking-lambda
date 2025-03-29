const { eventWithName, eventWithoutName } = require('../../events');
const { greeting } = require('../../src/handlers/getGreeting');
const { generateGreeting } = require('../../src/services/greetingService');

jest.mock('../../src/services/greetingService');

describe('getGreeting Handler', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('debería devolver un HTML válido con nombre', async () => {
    generateGreeting.mockReturnValue({
      html: '<html><body><h1>Hola, Jose!</h1></body></html>',
      statusCode: 200,
    });

    const result = await greeting(eventWithName);

    expect(result.statusCode).toBe(200);
    expect(result.headers['Content-Type']).toBe('text/html');
    expect(result.body).toMatch(/<h1>Hola, Jose!<\/h1>/);
  });

  it('debería manejar correctamente la ausencia de nombre', async () => {
    generateGreeting.mockReturnValue({
      html: '<html><body><h1>Hola, Usuario desconocido!</h1></body></html>',
      statusCode: 200,
    });

    const result = await greeting(eventWithoutName);

    expect(result.statusCode).toBe(200);
    expect(result.body).toMatch(/<h1>Hola, Usuario desconocido!<\/h1>/);
  });
});
