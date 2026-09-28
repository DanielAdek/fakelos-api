import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  Param,
  Inject,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { ApiTags, ApiConsumes, ApiBody, ApiOperation } from '@nestjs/swagger';
import { IProjectService } from '../../../domain/service/IProject.service';
import { CreateProjectDto } from '../../dto/project/create-project.dto';
import { UpdateProjectDto } from '../../dto/project/update-project.dto';
import { IApiResponse } from '../interface/api-response.interface';
import { ApiResponse, ApiResponseBuilder } from '../../dto/response/api.response';
import { IPROJECT_SERV_TOKEN } from '../../../infrastructure/shared/constants';
import { memoryStorage } from 'multer';

@ApiTags('Projects')
@Controller('projects')
export class ProjectController {
  constructor(
    @Inject(IPROJECT_SERV_TOKEN) private readonly service: IProjectService,
  ) {}

  @Post()
  @ApiOperation({ summary: 'Create a new project' })
  async create(@Body() dto: CreateProjectDto): Promise<IApiResponse<ApiResponse>> {
    const data = await this.service.create(dto);
    return ApiResponseBuilder.success().data(data).build();
  }

  @Get()
  @ApiOperation({ summary: 'Get all projects' })
  async findAll(): Promise<IApiResponse<ApiResponse>> {
    const data = await this.service.findAll();
    return ApiResponseBuilder.success().data(data).build();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get a project by ID' })
  async findOne(@Param('id') id: string): Promise<IApiResponse<ApiResponse>> {
    const data = await this.service.findOne(id);
    return ApiResponseBuilder.success().data(data).build();
  }

  @Put(':id')
  @ApiOperation({ summary: 'Update a project' })
  async update(
    @Param('id') id: string,
    @Body() dto: UpdateProjectDto,
  ): Promise<IApiResponse<ApiResponse>> {
    const data = await this.service.update(id, dto);
    return ApiResponseBuilder.success().data(data).build();
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete a project' })
  async remove(@Param('id') id: string): Promise<IApiResponse<ApiResponse>> {
    await this.service.remove(id);
    return ApiResponseBuilder.success().message('Project deleted successfully').build();
  }

  @Post(':id/upload-image')
  @ApiOperation({ summary: 'Upload main project image to Cloudinary' })
  @ApiConsumes('multipart/form-data')
  @ApiBody({
    schema: {
      type: 'object',
      properties: { file: { type: 'string', format: 'binary' } },
    },
  })
  @UseInterceptors(FileInterceptor('file', { storage: memoryStorage() }))
  async uploadImage(
    @Param('id') id: string,
    @UploadedFile() file: Express.Multer.File,
  ): Promise<IApiResponse<ApiResponse>> {
    const data = await this.service.uploadProjectImage(id, file);
    return ApiResponseBuilder.success().data(data).build();
  }

  @Post(':id/gallery-image')
  @ApiOperation({ summary: 'Add a gallery image to a project via Cloudinary' })
  @ApiConsumes('multipart/form-data')
  @ApiBody({
    schema: {
      type: 'object',
      properties: {
        file: { type: 'string', format: 'binary' },
        title: { type: 'string' },
      },
    },
  })
  @UseInterceptors(FileInterceptor('file', { storage: memoryStorage() }))
  async addGalleryImage(
    @Param('id') id: string,
    @UploadedFile() file: Express.Multer.File,
    @Body('title') title: string,
  ): Promise<IApiResponse<ApiResponse>> {
    const data = await this.service.addProjectGalleryImage(id, file, title);
    return ApiResponseBuilder.success().data(data).build();
  }
}
