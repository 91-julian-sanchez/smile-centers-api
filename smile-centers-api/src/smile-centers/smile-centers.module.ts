import { Module } from '@nestjs/common';
import { SmileCenterController } from './smile-centers.controller';
import { SmileCenterService } from './smile-centers.service';
import { MongooseModule } from '@nestjs/mongoose';
import { SmileCenter, SmileCenterSchema } from './smile-centers.schema';
import { SmileCenterRepository } from './smile-centers.repository';

@Module({
  controllers: [SmileCenterController],
  providers: [SmileCenterService, SmileCenterRepository],
  imports: [
    MongooseModule.forFeature([{ name: SmileCenter.name, schema: SmileCenterSchema }]),
  ],
  exports: [SmileCenterRepository, SmileCenterService]
})
export class SmileCentersModule {}
