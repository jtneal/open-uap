import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'open-uap.db',
      entities: [__dirname + '/**/*.entity.ts'],
      synchronize: true, // false in prod
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
