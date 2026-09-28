import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type CoverLetterDocument = CoverLetter & Document;

@Schema({ timestamps: true })
export class CoverLetter {
  @Prop({ required: true })
  title: string;

  @Prop({ required: true })
  fileUrl: string;

  @Prop({ default: '' })
  description: string;

  @Prop({ default: false })
  isActive: boolean;
}

export const CoverLetterSchema = SchemaFactory.createForClass(CoverLetter);
