import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsNotEmpty, IsString } from "class-validator";


export class LoginDto {
  @IsEmail()
  @IsNotEmpty()
  @ApiProperty({
    description: "Email",
    example: "joao@gmail.com"
  })
  email: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    description: "Senha do usuário",
    example: "Abcd@1234"
  })
  password: string;
}