import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import {
  IsArray,
  IsNotEmpty,
  IsOptional,
  IsString,
  ValidateNested,
} from 'class-validator';

export class ProjectImageDto {
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  title: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  img: string;
}

export class CompanyInfoItemDto {
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  title: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  details: string;

  @ApiPropertyOptional()
  @IsString()
  @IsOptional()
  link?: string;
}

export class TechnologyDto {
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  title: string;

  @ApiProperty({ type: [String] })
  @IsArray()
  @IsString({ each: true })
  techs: string[];
}

export class ProjectDetailItemDto {
  @ApiProperty()
  @IsString()
  point: string;

  @ApiProperty({ type: [String] })
  @IsArray()
  @IsString({ each: true })
  details: string[];
}

export class ProjectHeaderDto {
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  title: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  publishDate: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  tags: string;
}

export class ProjectInfoDto {
  @ApiPropertyOptional()
  @IsString()
  @IsOptional()
  ClientHeading?: string;

  @ApiPropertyOptional({ type: [CompanyInfoItemDto] })
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CompanyInfoItemDto)
  @IsOptional()
  CompanyInfo?: CompanyInfoItemDto[];

  @ApiPropertyOptional()
  @IsString()
  @IsOptional()
  ObjectivesHeading?: string;

  @ApiPropertyOptional()
  @IsString()
  @IsOptional()
  ObjectivesDetails?: string;

  @ApiPropertyOptional({ type: [TechnologyDto] })
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => TechnologyDto)
  @IsOptional()
  Technologies?: TechnologyDto[];

  @ApiPropertyOptional()
  @IsString()
  @IsOptional()
  ProjectDetailsHeading?: string;

  @ApiPropertyOptional({ type: [ProjectDetailItemDto] })
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ProjectDetailItemDto)
  @IsOptional()
  ProjectDetails?: ProjectDetailItemDto[];
}

export class CreateProjectDto {
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  title: string;

  @ApiPropertyOptional()
  @IsString()
  @IsOptional()
  url?: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  category: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  type: string;

  @ApiPropertyOptional()
  @IsString()
  @IsOptional()
  img?: string;

  @ApiPropertyOptional({ type: ProjectHeaderDto })
  @ValidateNested()
  @Type(() => ProjectHeaderDto)
  @IsOptional()
  ProjectHeader?: ProjectHeaderDto;

  @ApiPropertyOptional({ type: [ProjectImageDto] })
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ProjectImageDto)
  @IsOptional()
  ProjectImages?: ProjectImageDto[];

  @ApiPropertyOptional({ type: ProjectInfoDto })
  @ValidateNested()
  @Type(() => ProjectInfoDto)
  @IsOptional()
  ProjectInfo?: ProjectInfoDto;
}
