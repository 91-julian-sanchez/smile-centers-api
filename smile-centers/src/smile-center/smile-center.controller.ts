import { Controller, Get, Query } from '@nestjs/common';
import { SmileCenterService } from './smile-center.service';

@Controller('smile-center')
export class SmileCenterController {
  constructor(private readonly smileCentersService: SmileCenterService) {}

  @Get()
  async getCenters(
    @Query('centerType') centerType?: string,
    @Query('zone') zone?: string,
    @Query('service') service?: string,
  ) {
    return this.smileCentersService.getCenters(centerType, zone, service);
  }
}
