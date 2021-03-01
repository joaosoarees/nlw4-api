import { Request, Response } from 'express';

class UserController {
  async create(request: Request, response: Response) {
    const { name, email } = request.body;
    return response.send();
  }
}

export { UserController };
