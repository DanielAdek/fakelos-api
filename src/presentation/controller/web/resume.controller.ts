import {
  Controller,
  Get,
  Post,
  Patch,
  Delete,
  Param,
  Inject,
  UploadedFile,
  UseInterceptors,
  Body,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { ApiTags, ApiConsumes, ApiBody, ApiOperation } from '@nestjs/swagger';
import { IResumeService } from '../../../domain/service/IResume.service';
import { IApiResponse } from '../interface/api-response.interface';
import { ApiResponse, ApiResponseBuilder } from '../../dto/response/api.response';
import { IRESUME_SERV_TOKEN } from '../../../infrastructure/shared/constants';
import { memoryStorage } from 'multer';

@ApiTags('Resumes')
@Controller('resumes')
export class ResumeController {
  constructor(
    @Inject(IRESUME_SERV_TOKEN) private readonly service: IResumeService,
  ) {}

  @Post('upload')
  @ApiOperation({ summary: 'Upload a new resume PDF' })
  @ApiConsumes('multipart/form-data')
  @ApiBody({
    schema: {
      type: 'object',
      properties: {
        file: { type: 'string', format: 'binary' },
        title: { type: 'string' },
        description: { type: 'string' },
      },
    },
  })
  @UseInterceptors(FileInterceptor('file', { storage: memoryStorage() }))
  async upload(
    @UploadedFile() file: Express.Multer.File,
    @Body('title') title: string,
    @Body('description') description: string,
  ): Promise<IApiResponse<ApiResponse>> {
    const data = await this.service.upload(file, title, description);
    return ApiResponseBuilder.success().data(data).build();
  }

  @Get()
  @ApiOperation({ summary: 'Get all resumes' })
  async findAll(): Promise<IApiResponse<ApiResponse>> {
    const data = await this.service.findAll();
    return ApiResponseBuilder.success().data(data).build();
  }

  @Get('active')
  @ApiOperation({ summary: 'Get the active resume' })
  async findActive(): Promise<IApiResponse<ApiResponse>> {
    const data = await this.service.findActive();
    return ApiResponseBuilder.success().data(data || {}).build();
  }

  @Patch(':id/set-active')
  @ApiOperation({ summary: 'Set a resume as the active one' })
  async setActive(@Param('id') id: string): Promise<IApiResponse<ApiResponse>> {
    const data = await this.service.setActive(id);
    return ApiResponseBuilder.success().data(data).build();
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete a resume' })
  async remove(@Param('id') id: string): Promise<IApiResponse<ApiResponse>> {
    await this.service.remove(id);
    return ApiResponseBuilder.success().message('Resume deleted successfully').build();
  }
}
