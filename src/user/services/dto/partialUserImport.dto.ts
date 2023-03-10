import { PartialType } from '@nestjs/mapped-types';
import { UserDto } from 'src/user/services/dto/userInput.dto';

export class PartialUserDto extends PartialType(UserDto) {
  id: string;
}