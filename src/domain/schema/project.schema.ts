import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { ApiProperty } from '@nestjs/swagger';

export type ProjectDocument = Project & Document;

@Schema({ _id: false })
export class ProjectImage {
  @Prop({ required: true })
  title: string;

  @Prop({ required: true })
  img: string;
}

export const ProjectImageSchema = SchemaFactory.createForClass(ProjectImage);

@Schema({ _id: false })
export class CompanyInfoItem {
  @Prop({ required: true })
  title: string;

  @Prop({ required: true })
  details: string;

  @Prop({ default: '' })
  link: string;
}

export const CompanyInfoItemSchema = SchemaFactory.createForClass(CompanyInfoItem);

@Schema({ _id: false })
export class Technology {
  @Prop({ required: true })
  title: string;

  @Prop({ type: [String], default: [] })
  techs: string[];
}

export const TechnologySchema = SchemaFactory.createForClass(Technology);

@Schema({ _id: false })
export class ProjectDetailItem {
  @Prop({ required: true })
  point: string;

  @Prop({ type: [String], default: [] })
  details: string[];
}

export const ProjectDetailItemSchema = SchemaFactory.createForClass(ProjectDetailItem);

@Schema({ _id: false })
export class ProjectHeader {
  @Prop({ required: true })
  title: string;

  @Prop({ required: true })
  publishDate: string;

  @Prop({ required: true })
  tags: string;
}

export const ProjectHeaderSchema = SchemaFactory.createForClass(ProjectHeader);

@Schema({ _id: false })
export class ProjectInfo {
  @Prop({ default: 'About Company' })
  ClientHeading: string;

  @Prop({ type: [CompanyInfoItemSchema], default: [] })
  CompanyInfo: CompanyInfoItem[];

  @Prop({ default: 'Objective' })
  ObjectivesHeading: string;

  @Prop({ default: '' })
  ObjectivesDetails: string;

  @Prop({ type: [TechnologySchema], default: [] })
  Technologies: Technology[];

  @Prop({ default: 'My Contributions' })
  ProjectDetailsHeading: string;

  @Prop({ type: [ProjectDetailItemSchema], default: [] })
  ProjectDetails: ProjectDetailItem[];
}

export const ProjectInfoSchema = SchemaFactory.createForClass(ProjectInfo);

@Schema({ timestamps: true })
export class Project {
  @ApiProperty()
  @Prop({ required: true })
  title: string;

  @ApiProperty()
  @Prop({ default: '' })
  url: string;

  @ApiProperty()
  @Prop({ required: true })
  category: string;

  @ApiProperty()
  @Prop({ required: true })
  type: string;

  @ApiProperty()
  @Prop({ required: true })
  img: string;

  @Prop({ type: ProjectHeaderSchema })
  ProjectHeader: ProjectHeader;

  @Prop({ type: [ProjectImageSchema], default: [] })
  ProjectImages: ProjectImage[];

  @Prop({ type: ProjectInfoSchema })
  ProjectInfo: ProjectInfo;
}

export const ProjectSchema = SchemaFactory.createForClass(Project);
