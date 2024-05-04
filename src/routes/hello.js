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


helloRoutes.get("/", sayHello);

export default helloRoutes;
