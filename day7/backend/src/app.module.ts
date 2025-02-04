import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BlogModule } from './modules/blog/blog.module';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './modules/user/user.module';
import { Blog } from './modules/blog/entities/blog.entity';
import { Status } from './modules/blog/entities/status.entity';
import { Tag } from './modules/blog/entities/tag.entity';
import { User } from './modules/user/entities/user.entity';

@Module({
  imports: [
    BlogModule,
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: process.env.DB_HOST,
      port: +process.env.DB_PORT,
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_DATABASE,
      entities: [Blog, Status, User, Tag],
      synchronize:
        process.env.NODE_ENV === 'development' || !process.env.NODE_ENV,
      logging: process.env.NODE_ENV === 'development' || !process.env.NODE_ENV,
    }),
    BlogModule,
    UserModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
