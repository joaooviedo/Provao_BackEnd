import { Module } from '@nestjs/common';
import { PrismaModule } from 'src/prisma/prisma.module';
import { UserService } from './user/services/user.service';
import { UserController } from './user/user.controller';
import { UserRepository } from './user/user.repository';
import { PrismaService } from 'src/prisma/prisma.service';
import { AuthModule } from './auth/auth.module';




@Module({
    imports: [PrismaModule, AuthModule],
    controllers: [UserController],
    providers: [UserService, UserRepository, PrismaService] 
})

export class AppModule {}