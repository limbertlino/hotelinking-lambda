# Lambda Greeting API

Este proyecto utiliza AWS SAM (Serverless Application Model) para crear y desplegar una función Lambda accesible a través de API Gateway.

## Deploy de la función Lambda

### Requisitos previos
- Tener AWS CLI instalado con un usuario logueado
- Tener SAM CLI instalado

Para desplegar esta función Lambda en AWS utilizando SAM, sigue estos pasos:



## 1. Clonar el repositorio
## 2. Construir el proyecto con SAM
Una vez que tengas todo listo, primero construye el proyecto localmente utilizando el comando:

```bash
sam build
```
Esto preparará el proyecto para su despliegue, empaquetando las dependencias necesarias.

## 3. Desplegar la función Lambda
Para desplegar la función Lambda en AWS, usa el siguiente comando de SAM:
```bash
sam deploy --guided
```

Este comando te guiará a través del proceso de despliegue. Te pedirá que configures algunos parámetros como el nombre del stack, la región de AWS y otros detalles. El comando también creará los recursos necesarios en AWS, como la función Lambda, API Gateway, roles de IAM, etc.

Una vez que el despliegue se haya completado con éxito, te proporcionará una URL pública de tu API Gateway, que podrás utilizar para acceder a la función Lambda.

## 4. Acceder a la API
Una vez desplegada la función Lambda, podrás acceder a ella a través de la URL pública proporcionada por API Gateway. Esta URL tendrá el siguiente formato
```bash
https://<ID_DEL_API>.execute-api.<REGION>.amazonaws.com/Prod/greeting?name=<NOMBRE>
```
## 5. Actualizar el deploy si es necesario
Si realizas cambios en el código y deseas actualizar la función Lambda desplegada, simplemente vuelve a ejecutar el comando:
```bash
sam deploy
```

## Uso

Puedes acceder a la API a través de la siguiente URL pública:

https://3kdf56lhz4.execute-api.us-east-1.amazonaws.com/Prod/greeting?name=jose


Reemplaza `jose` en el parámetro `name` por cualquier otro nombre para obtener un saludo personalizado. Si no se proporciona un nombre, la respuesta será "Usuario desconocido".

Ejemplo de respuesta:
```html
<html>
  <body>
    <h1>Hola, Jose!</h1>
    <p>La hora actual es: 15:25:47</p>
  </body>
</html>
```

## Ejemplo de pruebas
Las pruebas unitarias y de integración están incluidas en este proyecto. Para ejecutarlas, corre el siguiente comando:
```bash
npm run test
```
Esto ejecutará todas las pruebas y te mostrará los resultados en la terminal.

## Tecnologías utilizadas
- AWS Lambda
- AWS API Gateway (para exponer el endpoint)
- AWS SAM (Serverless Application Model)
- Node.js
- Jest (pruebas unitarias y de integracion)
