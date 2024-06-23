import { Module } from '@nestjs/common';
import { SmileCenterController } from './smile-center.controller';
import { SmileCenterService } from './smile-center.service';
import { MongooseModule } from '@nestjs/mongoose';
import { SmileCenters, SmileCenterSchema } from './smile-center.schema';
import { SmileCentersRepository } from './smile-centers.repository';

@Module({
  controllers: [SmileCenterController],
  providers: [SmileCenterService, SmileCentersRepository],
  imports: [
    MongooseModule.forFeature([{ name: SmileCenters.name, schema: SmileCenterSchema }]),
  ],
  exports: [SmileCentersRepository, SmileCenterService]
})
export class SmileCenterModule {}
