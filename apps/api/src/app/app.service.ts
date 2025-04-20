import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Report } from './entities/report.entity';

@Injectable()
export class AppService {
  constructor(@InjectRepository(Report) private readonly repo: Repository<Report>) {}

  getRecentReports(): Promise<Report[]> {
    return this.repo.find();
  }
}
