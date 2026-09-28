import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type ResumeDocument = Resume & Document;

@Schema({ timestamps: true })
export class Resume {
  @Prop({ required: true })
  title: string;

  @Prop({ required: true })
  fileUrl: string;

  @Prop({ default: '' })
  description: string;

  @Prop({ default: false })
  isActive: boolean;
}

export const ResumeSchema = SchemaFactory.createForClass(Resume);
