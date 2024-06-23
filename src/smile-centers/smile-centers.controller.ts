import { Controller, Get, Query, UsePipes, ValidationPipe } from '@nestjs/common';
import { SmileCenterService } from './smile-centers.service';
import { GetSmileCenterDto } from './dto/get-smile-centers.dto';

@Controller('smile-center')
export class SmileCenterController {
  constructor(private readonly smileCentersService: SmileCenterService) {}

  @Get()
  @UsePipes(new ValidationPipe({ transform: true }))
  async getCenters(@Query() getCentersDto: GetSmileCenterDto) {
    return this.smileCentersService.getCenters(getCentersDto);
  }
}
