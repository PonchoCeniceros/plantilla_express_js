import { Router } from "express";
import { verifyToken } from "../middleware/auth";
import { sayHello } from "../controllers/hello";

const helloRoutes = new Router();

/**
 *
 */
helloRoutes.use(async (request, response, next) => {
  const token = request.headers['authorization'];   
  const valiation = await verifyToken(token);

  if (valiation.isOk) {
    if (valiation.data) {
      request.user = valiation.data;
      next();
    } else {
      response.status(403).json(valiation);
    }
  } else {
    response.status(401).json(valiation);
  }
});


/**
 * @swagger
 * /:
 *   get:
 *     summary: Saludar al usuario
 *     description: Retorna un mensaje de saludo personalizado utilizando el nombre de usuario proporcionado en la solicitud.
 *     security:
 *       - BearerAuth: []
 *     responses:
 *       200:
 *         description: Saludo exitoso
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "¡Hola Mundo, usuario!"
 *     tags:
 *       - Saludos
 */
helloRoutes.get("/", sayHello);

export default helloRoutes;
