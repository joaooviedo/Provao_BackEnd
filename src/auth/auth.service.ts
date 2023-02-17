import { Injectable } from '@nestjs/common';
import { LoginDto } from 'src/auth/dto/login.dto';
import { LoginResponseDto } from 'src/auth/dto/login-response.dto';

@Injectable()
export class AuthService {
  async login(loginDto: LoginDto): Promise<LoginResponseDto> {
    return {
      token: "Teste",
      user: undefined
    };
  }
}