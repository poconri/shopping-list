import { Body, Controller, Get, Post } from '@nestjs/common';
import { LoginService } from './login.service';

@Controller('login')
export class LoginController {
  constructor(private loginService: LoginService) {}

  @Get()
  getLogin() {
    return 'Login';
  }

  @Post()
  async login(@Body() body) {
    console.log('body', body, body.username, body.password);
    const { username, password } = body;
    const result = await this.loginService.validateUser(username, password);
    console.log('result', result);
    if (result) {
      return result;
    } else {
      return { error: 'Invalid username or password' };
    }
  }
}
