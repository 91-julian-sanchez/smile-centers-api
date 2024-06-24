import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import * as mongoose from 'mongoose';

@Schema({ collection: 'SmileCenters' })
export class SmileCenter extends Document {

  @Prop()
  objectId!: string;

  @Prop()
  Center_Name!: string;

  @Prop()
  Street!: string;

  @Prop()
  Number!: string;

  @Prop()
  Neighborhood!: string;

  @Prop()
  Calendar_Id!: string;

  @Prop()
  Appointment_Type_Id!: string;

  @Prop()
  Center_Type!: string;

  @Prop()
  Zone!: string;

  @Prop()
  Country!: string;

  @Prop()
  City!: string;

  @Prop()
  promo!: string;

  @Prop({ type: mongoose.Schema.Types.Mixed })
  Services!: Record<string, any>;

  @Prop({ type: mongoose.Schema.Types.Mixed })
  Timetable!: Record<string, any>;
}

export const SmileCenterSchema = SchemaFactory.createForClass(SmileCenter);
