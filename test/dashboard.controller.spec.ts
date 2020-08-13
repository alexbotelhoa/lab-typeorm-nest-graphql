import { Test, TestingModule } from '@nestjs/testing';

import DashboardController from '../src/modules/Dashboard/dashboard.controller';
import DashboardService from '../src/modules/Dashboard/dashboard.service';

describe('DashboardController', () => {
  let dashboardController: DashboardController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [DashboardController],
      providers: [DashboardService],
    }).compile();

    dashboardController = app.get<DashboardController>(DashboardController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(dashboardController.getHello()).toBe('Hello World!');
    });
  });
});
