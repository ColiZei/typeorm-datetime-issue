import { Controller, Get, Param } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get(':testId')
  getData(@Param('testId') testId: number) {
    return this.appService.get(+testId);
  }
}
