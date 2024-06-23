import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { SmileCenters } from './smile-center.schema';

@Injectable()
export class SmileCenterService {
  constructor(
    @InjectModel(SmileCenters.name) private readonly smileCenterModel: Model<SmileCenters>,
  ) {}

  async getCenters(centerType?: string, zone?: string, service?: string): Promise<any> {
    const query: any = {};
    if (centerType) query.Center_Type = centerType;
    if (zone) query.Zone = zone;
    if (service) query[`Services.${service}`] = { $exists: true };
    const centers = await this.smileCenterModel.find(query).exec();
    return centers.map(center => ({
      name: center.Center_Name,
      address: center.Street,
      calendarId: center.Calendar_Id,
      appointmentTypeId: service ? center.Services[service]?.AppointmentTypeId : center.Appointment_Type_Id,
    }));
  }
}
