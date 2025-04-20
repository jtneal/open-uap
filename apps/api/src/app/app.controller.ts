import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { Report } from './entities/report.entity';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('reports/recent')
  getRecentReports(): Promise<Report[]> {
    return this.appService.getRecentReports();
  }
}
