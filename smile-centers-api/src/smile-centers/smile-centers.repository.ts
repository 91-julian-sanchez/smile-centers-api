import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { SmileCenter } from './smile-centers.schema';

@Injectable()
export class SmileCenterRepository {
    constructor(
        @InjectModel(SmileCenter.name) private readonly smileCenterModel: Model<SmileCenter>,
    ) {}

  async findByFilters(filters: any): Promise<SmileCenter[]> {
    return await this.smileCenterModel.find(filters).exec();
  }
}
