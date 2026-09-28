import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  Param,
  Inject,
} from '@nestjs/common';
import { ApiTags, ApiOperation } from '@nestjs/swagger';
import { IAboutService } from '../../../domain/service/IAbout.service';
import { CreateAboutDto } from '../../dto/about/create-about.dto';
import { UpdateAboutDto } from '../../dto/about/update-about.dto';
import { IApiResponse } from '../interface/api-response.interface';
import { ApiResponse, ApiResponseBuilder } from '../../dto/response/api.response';
import { IABOUT_SERV_TOKEN } from '../../../infrastructure/shared/constants';

@ApiTags('About')
@Controller('about')
export class AboutController {
  constructor(
    @Inject(IABOUT_SERV_TOKEN) private readonly service: IAboutService,
  ) {}

  @Post()
  @ApiOperation({ summary: 'Create a new about entry' })
  async create(@Body() dto: CreateAboutDto): Promise<IApiResponse<ApiResponse>> {
    const data = await this.service.create(dto);
    return ApiResponseBuilder.success().data(data).build();
  }

  @Get()
  @ApiOperation({ summary: 'Get all about entries' })
  async findAll(): Promise<IApiResponse<ApiResponse>> {
    const data = await this.service.findAll();
    return ApiResponseBuilder.success().data(data).build();
  }

  @Put(':id')
  @ApiOperation({ summary: 'Update an about entry' })
  async update(
    @Param('id') id: string,
    @Body() dto: UpdateAboutDto,
  ): Promise<IApiResponse<ApiResponse>> {
    const data = await this.service.update(id, dto);
    return ApiResponseBuilder.success().data(data).build();
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete an about entry' })
  async remove(@Param('id') id: string): Promise<IApiResponse<ApiResponse>> {
    await this.service.remove(id);
    return ApiResponseBuilder.success().message('About entry deleted successfully').build();
  }

  @Put()
  @ApiOperation({ summary: 'Replace all about entries' })
  async replaceAll(@Body() dtos: CreateAboutDto[]): Promise<IApiResponse<ApiResponse>> {
    const data = await this.service.replaceAll(dtos);
    return ApiResponseBuilder.success().data(data).build();
  }
}
