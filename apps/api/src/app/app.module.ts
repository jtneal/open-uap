import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Report } from './entities/report.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'open-uap.db',
      entities: [Report],
      synchronize: true, // false in prod
    }),
    TypeOrmModule.forFeature([Report]),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
