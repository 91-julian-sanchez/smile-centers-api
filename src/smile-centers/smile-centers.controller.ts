import { Controller, Get, Query, UsePipes, ValidationPipe } from '@nestjs/common';
import { SmileCenterService } from './smile-centers.service';
import { GetSmileCenterDto } from './dto/get-smile-centers.dto';
import { ApiTags, ApiOperation, ApiQuery } from '@nestjs/swagger';

@ApiTags('smile-center')
@Controller('smile-center')
export class SmileCenterController {
  constructor(private readonly smileCentersService: SmileCenterService) {}

  @Get()
  @UsePipes(new ValidationPipe({ transform: true }))
  @ApiOperation({ summary: 'Obtener Smile Centers' })
  async getCenters(@Query() getCentersDto: GetSmileCenterDto) {
    return this.smileCentersService.getCenters(getCentersDto);
  }
}
