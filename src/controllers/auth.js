import ApiResponse from "../models/apiResponse";
import { createToken, validateCredentials } from "../middleware/auth";

/**
 * definición del endpoint:
 *
 * try {
 *     obtención del request
 *     procesamiento de la información
 *     ...
 *     response status 200 u otro valor
 *   }
 * } catch(error) {
 *   response status 500
 * }
 *
 * se exportan todos los endpoints a su router específico correspondiente
 */
const login = async (request, response) => {
  try {
    const credentials = request.body;
    const isValid = validateCredentials(credentials);

    if (isValid) {
      const payload = { username: credentials.username };
      const token = createToken(payload);
      response.status(200).json(new ApiResponse(true, 'successfull login', token));
    } else {
      response.status(200).json(new ApiResponse(true, 'incorrect username or password', null));
    }

  } catch(error) {
    response.status(500).json(new ApiResponse(false, 'error', JSON.stringify(error)));
  }
};

export {
  login,
};
