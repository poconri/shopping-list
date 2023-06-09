import { Injectable } from '@nestjs/common';

@Injectable()
export class LoginService {
  async validateUser(
    username: string,
    password: string,
  ): Promise<{
    message: string;
  }> {
    if (username === 'admin' && password === 'admin') {
      return {
        message: 'Login successful',
      };
    } else {
      return {
        message: `invalid ${!username ? 'username' : 'password'}`,
      };
    }
  }
}
