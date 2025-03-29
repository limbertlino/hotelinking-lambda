const { generateGreeting } = require('../../src/services/greetingService');

describe('greetingService', () => {
  it('debería generar un saludo con nombre', () => {
    const result = generateGreeting('Jose');
    expect(result.html).toContain('<h1>Hola, Jose!</h1>');
    expect(result.statusCode).toBe(200);
  });

  it('debería generar un saludo con el nombre por defecto', () => {
    const result = generateGreeting();
    expect(result.html).toContain('<h1>Hola, Usuario desconocido!</h1>');
    expect(result.statusCode).toBe(200);
  });

  it('debería incluir la hora actual en el saludo', () => {
    const result = generateGreeting('Jose');
    expect(result.html).toContain('La hora actual es:');
  });
});
