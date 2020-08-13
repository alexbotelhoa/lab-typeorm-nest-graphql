import { Controller, Get } from '@nestjs/common';

import DashboardService from './dashboard.service';

@Controller()
class DashboardController {

  constructor(
    private readonly dashboardService: DashboardService
   ) {}

  @Get()
  async getHello(): Promise<string> {
    return this.dashboardService.getHello();
  }
  
}

export default DashboardController;
