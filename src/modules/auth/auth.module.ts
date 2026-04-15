// import { Module } from '@nestjs/common';
// import { JwtModule } from '@nestjs/jwt';
// import { AuthService } from './auth.service';
// import { AuthController } from './auth.controller';
// import { CloudinaryService } from '../../common/services/cloudinary.service';
// import { PrismaModule } from '../../prisma/prisma.module';
// import path from 'path';
// import dotenv from 'dotenv';

// dotenv.config({ path: path.join(process.cwd(), '.env') });

// const jwtSecret = process.env.JWT_SECRET;

// @Module({
//   imports: [
//     PrismaModule,
//     JwtModule.register({
//       secret: jwtSecret,
//       signOptions: { expiresIn: '7d' },
//     }),
//   ],
//   controllers: [AuthController],
//   providers: [AuthService, CloudinaryService],
// })
// export class AuthModule {}

import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { JwtStrategy } from './strategies/jwt.strategy';
import { CloudinaryService } from '../../common/services/cloudinary.service';

@Module({
  imports: [
    PassportModule.register({ defaultStrategy: 'jwt' }),
    JwtModule.registerAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (config: ConfigService) => ({
        secret: config.get<string>('JWT_SECRET'),
        signOptions: { expiresIn: '7d' },
      }),
    }),
  ],
  controllers: [AuthController],
  providers: [AuthService, JwtStrategy, CloudinaryService],
})
export class AuthModule {}
