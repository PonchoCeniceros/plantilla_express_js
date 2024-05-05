import { Router } from "express";
import { login } from "../controllers/auth";

const authRoutes = new Router();

/**
 * @swagger
 * /auth/login:
 *   post:
 *     description: Retorna todos los usuarios
 *     responses:
 *       200:
 *         description: Lista de usuarios
 *       500:
 *         description: Error del servidor
 */
authRoutes.post("/login", login);

export default authRoutes;
