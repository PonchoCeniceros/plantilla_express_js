// import dotenv from 'dotenv';
// import app from './api';
/**
 * configuración de las variables de entorno
 */
// dotenv.config();
//
/**
 * se levanta a API proporcionada desde api.js
 */
// app.listen(process.env.PORT, async () => {
//     const ONE_SEC = 1000;
//
//     await new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log(`api on port ${process.env.PORT}`);
//             resolve(true);
//         }, ONE_SEC);
//     });
// });


const express = require('express');
const swaggerJsdoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Opciones de configuración para swagger-jsdoc
const swaggerOptions = {
  swaggerDefinition: {
    info: {
      title: 'API de Ejemplo',
      description: 'Documentación de la API de Ejemplo con Swagger',
      version: '1.0.0',
    },
  },
  // Rutas de archivos con anotaciones JSDoc
  apis: ['./index.js'],
};

// Crear un objeto swagger-jsdoc
const swaggerDocs = swaggerJsdoc(swaggerOptions);

// Middleware para servir la documentación Swagger UI
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));

/**
 * @swagger
 * /hello:
 *  get:
 *   summary: Saludo de bienvenida
 *   description: Retorna un mensaje de saludo.
 *   responses:
 *    200:
 *     description: Saludo exitoso
 */
app.get('/hello', (req, res) => {
  res.json({ message: '¡Hola, mundo!' });
});

// Iniciar el servidor
app.listen(PORT, () => {
  console.log(`Servidor en ejecución en http://localhost:${PORT}`);
});
