import { Injectable } from '@nestjs/common';

@Injectable()
export class AuthService {
  async validateUser(username: string, password: string) {
    return {
      token: 'token-falso',
    };
  }
}
