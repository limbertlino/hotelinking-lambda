const generateGreeting = (name) => {
  if (!name) name = 'Usuario desconocido';

  let time = new Date().toLocaleTimeString('es-ES', {
    hour12: false,
  });

  return {
    html: `<html>
                  <body>
                      <h1>Hola, ${name}!</h1>
                      <p>La hora actual es: ${time}</p>
                  </body>
               </html>`,

    statusCode: 200,
  };
};

module.exports = { generateGreeting };
