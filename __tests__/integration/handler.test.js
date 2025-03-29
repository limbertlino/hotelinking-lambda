const { eventWithName, eventWithoutName } = require('../../events');
const { greeting } = require('../../src/handlers/getGreeting');

describe('Test de integracion de la Lambda - greeting', () => {
  test('Debe devolver un HTML válido con nombre', async () => {
    const result = await greeting(eventWithName);

    expect(result.statusCode).toBe(200);
    expect(result.headers['Content-Type']).toBe('text/html');
    expect(result.body).toMatch(/<h1>Hola, jose!<\/h1>/);
    expect(result.body).toMatch(/La hora actual es:/);
  });

  test('Debe manejar correctamente la ausencia de nombre', async () => {
    const result = await greeting(eventWithoutName);

    expect(result.statusCode).toBe(200);
    expect(result.body).toMatch(/<h1>Hola, Usuario desconocido!<\/h1>/);
  });
});
