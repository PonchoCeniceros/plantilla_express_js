import jwt from 'jsonwebtoken';
import ApiResponse from '../models/apiResponse';

/**
 *
 */
const validateCredentials = credentials => {
  /**
   * @todo hacer validaciones del usuario
   */
  return true;
};

/**
 *
 */
const createToken = payload => {
  const  token = jwt.sign(payload, process.env.JWT_SECRET_KEY);
  return token;
};

/**
 *
 */
const verifyToken = token => {
  if (token) {
    const tokenParts = token.split(' '); // extraer el token del header 
    const tokenValue = tokenParts[1];    // (formato: "Bearer <token>")

    return new Promise((resolve, reject) => {
      jwt.verify(tokenValue, process.env.JWT_SECRET_KEY, (error, decoded) => {
        const response = error ? new ApiResponse(true, 'invalid token', null) : new ApiResponse(true, 'valid token', decoded);
        resolve(response);
      });
    });
  }
  return new ApiResponse(false, 'no token', null);
};

export {
  validateCredentials,
  createToken,
  verifyToken,
};
