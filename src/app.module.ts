// import { Module } from '@nestjs/common';
// // import { AppController } from './app.controller';
// // import { AppService } from './app.service';
// import { UsersModule } from './modules/users/users.module';
// // import { PrismaModule } from './prisma/prisma.module';
// import { AuthModule } from './modules/auth/auth.module';

// @Module({
//   imports: [UsersModule, AuthModule],
//   // controllers: [AppController],
//   // providers: [AppService],
// })
// export class AppModule {}
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { PrismaModule } from './prisma/prisma.module';
import { AuthModule } from './modules/auth/auth.module';
import { UsersModule } from './modules/users/users.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    PrismaModule,
    AuthModule,
    UsersModule,
  ],
})
export class AppModule {}