import dotenv from 'dotenv';
import api from './api';
/**
 * configuración de las variables de entorno
 */
dotenv.config();

/**
 * se levanta a API proporcionada desde api.js
 */
api.listen(process.env.PORT, async () => {
    const ONE_SEC = 1000;

    await new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(`api on port ${process.env.PORT}`);
            resolve(true);
        }, ONE_SEC);
    });
});
