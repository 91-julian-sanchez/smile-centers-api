import { Module } from '@nestjs/common';
import { SmileCenterController } from './smile-center.controller';
import { SmileCenterService } from './smile-center.service';
import { MongooseModule } from '@nestjs/mongoose';
import { SmileCenters, SmileCenterSchema } from './smile-center.schema';
@Module({
  controllers: [SmileCenterController],
  providers: [SmileCenterService],
  imports: [
    MongooseModule.forFeature([{ name: SmileCenters.name, schema: SmileCenterSchema }]),
  ]
})
export class SmileCenterModule {}
