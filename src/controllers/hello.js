import ApiResponse from "../models/apiResponse";

/**
 *
 */
const sayHello = async (request, response) => {
  response.status(200).json(new ApiResponse(true, `Hello World ${request.user.username}!`, null));
}

export {
  sayHello
}
