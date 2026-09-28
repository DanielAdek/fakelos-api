import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type ClientDocument = Client & Document;

@Schema({ timestamps: true })
export class Client {
  @Prop({ required: true })
  title: string;

  @Prop({ required: true })
  img: string;
}

export const ClientSchema = SchemaFactory.createForClass(Client);
