// smile-centers/src/smile-center/smile-center.controller.ts
import { Controller, Get, Query, UsePipes, ValidationPipe } from '@nestjs/common';
import { SmileCenterService } from './smile-center.service';
import { GetSmileCentersDto } from './dto/get-smile-centers.dto';

@Controller('smile-center')
export class SmileCenterController {
  constructor(private readonly smileCentersService: SmileCenterService) {}

  @Get()
  @UsePipes(new ValidationPipe({ transform: true }))
  async getCenters(@Query() getCentersDto: GetSmileCentersDto) {
    return this.smileCentersService.getCenters(getCentersDto);
  }
}
