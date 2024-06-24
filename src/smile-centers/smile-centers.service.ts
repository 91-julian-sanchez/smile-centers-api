import { Injectable } from '@nestjs/common';
import { SmileCenterRepository } from './smile-centers.repository';
import { GetSmileCenterDto } from './dto/get-smile-centers.dto';

@Injectable()
export class SmileCenterService {
  constructor(private readonly smileCentersRepository: SmileCenterRepository) {}

  async getCenters(getCentersDto: GetSmileCenterDto): Promise<any> {
    const { centerType, zone, service } = getCentersDto;
    const filters: any = {};
    if (centerType) filters.Center_Type = centerType;
    if (zone) filters.Zone = zone;
    if (service) filters[`Services.${service}`] = { $exists: true };
    const centers = await this.smileCentersRepository.findByFilters(filters)
    return centers.map(center => ({
      id: center.objectId,
      name: center.Center_Name,
      address: `${center.Street} ${center.Number}`,
      neighborhood: center.Neighborhood,
      calendarId: center.Calendar_Id,
      appointmentTypeId: service ? center.Services[service]?.AppointmentTypeId : center.Appointment_Type_Id,
      zone: center.Zone,
      timetable: center.Timetable,
      services: center.Services,
      centerType: center.Center_Type,
      promo: center.promo,
      country: center.Country,
      city: center.City,
    }));
  }
}
