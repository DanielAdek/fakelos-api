import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type AboutDocument = About & Document;

@Schema({ timestamps: true })
export class About {
  @Prop({ required: true })
  bio: string;

  @Prop({ default: 0 })
  order: number;
}

export const AboutSchema = SchemaFactory.createForClass(About);
