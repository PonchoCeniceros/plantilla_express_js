import express from 'express';
import authRoutes from './routes/auth';
import helloRoutes from './routes/hello';
/**
 * se instancia la API
 */
const api = express();

/**
 * ruta base de la API
 */
api.get('/', (request, response) => {
  response.status(200).json({
    date: {
      string: new Date().toISOString(),
      timestamp: Date.now(),
      version: '0.0.1',
      environment: process.env.NODE_ENV
    },
  });
});

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
