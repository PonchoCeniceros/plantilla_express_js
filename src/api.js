import express from 'express';
import swaggerJsdoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';
import authRoutes from './routes/auth';
import helloRoutes from './routes/hello';

/**
 * se instancia la API
 */
const api = express();

// Opciones de configuración para swagger-jsdoc
const swaggerOptions = {
  swaggerDefinition: {
    info: {
      title: 'API',
      description: 'API documentation',
      version: '0.0.1',
    },
  },
  // Rutas de archivos con anotaciones JSDoc
  apis: ['./routes/*.js'],
};

// Crear un objeto swagger-jsdoc
const swaggerDocs = swaggerJsdoc(swaggerOptions);

// Middleware para servir la documentación Swagger UI
api.use('/api-docs/', swaggerUi.serve, swaggerUi.setup(swaggerDocs));

/**
 * middleware que solo analiza JSON y solo observa
 * las solicitudes en las que el encabezado de tipo
 * de contenido coincide con la opción de tipo
 */
api.use(express.json());

/**
 * router general de la API:
 * aqui se definen las rutas base para las
 * diversas funcionalidades de la aplicación
 */
api.use('/auth/', authRoutes);
api.use('/hello/', helloRoutes);

export default api;





// import express from 'express';
// import swaggerJsdoc from 'swagger-jsdoc';
// import swaggerUi from 'swagger-ui-express';
// import authRoutes from './routes/auth';
// import helloRoutes from './routes/hello';
//
/**
 * se instancia la API
 */
// const api = express();
//
// // Opciones de configuración para swagger-jsdoc
// const swaggerOptions = {
//   swaggerDefinition: {
//     info: {
//       title: 'API',
//       description: 'API documentation',
//       version: '0.0.1',
//     },
//   },
//   // Rutas de archivos con anotaciones JSDoc
//   apis: ['./routes/*.js'],
// };
//
// // Crear un objeto swagger-jsdoc
// const swaggerDocs = swaggerJsdoc(swaggerOptions);
//
// // Middleware para servir la documentación Swagger UI
// api.use('/api-docs/', swaggerUi.serve, swaggerUi.setup(swaggerDocs));
//
/**
 * middleware que solo analiza JSON y solo observa
 * las solicitudes en las que el encabezado de tipo
 * de contenido coincide con la opción de tipo
 */
// api.use(express.json());
//
/**
 * router general de la API:
 * aqui se definen las rutas base para las
 * diversas funcionalidades de la aplicación
 */
// api.use('/auth/', authRoutes);
// api.use('/hello/', helloRoutes);
//
// export default api;
