import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { SmileCenters } from './smile-center.schema';

@Injectable()
export class SmileCentersRepository {
    constructor(
        @InjectModel(SmileCenters.name) private readonly smileCenterModel: Model<SmileCenters>,
    ) {}

  async findByFilters(filters: any): Promise<SmileCenters[]> {
    return await this.smileCenterModel.find(filters).exec();
  }
}
