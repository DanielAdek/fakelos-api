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
import { IClientService } from '../../../domain/service/IClient.service';
import { CreateClientDto } from '../../dto/client/create-client.dto';
import { UpdateClientDto } from '../../dto/client/update-client.dto';
import { IApiResponse } from '../interface/api-response.interface';
import { ApiResponse, ApiResponseBuilder } from '../../dto/response/api.response';
import { ICLIENT_SERV_TOKEN } from '../../../infrastructure/shared/constants';
import { memoryStorage } from 'multer';

@ApiTags('Clients')
@Controller('clients')
export class ClientController {
  constructor(
    @Inject(ICLIENT_SERV_TOKEN) private readonly service: IClientService,
  ) {}

  @Post()
  @ApiOperation({ summary: 'Create a new client' })
  async create(@Body() dto: CreateClientDto): Promise<IApiResponse<ApiResponse>> {
    const data = await this.service.create(dto);
    return ApiResponseBuilder.success().data(data).build();
  }

  @Get()
  @ApiOperation({ summary: 'Get all clients' })
  async findAll(): Promise<IApiResponse<ApiResponse>> {
    const data = await this.service.findAll();
    return ApiResponseBuilder.success().data(data).build();
  }

  @Put(':id')
  @ApiOperation({ summary: 'Update a client' })
  async update(
    @Param('id') id: string,
    @Body() dto: UpdateClientDto,
  ): Promise<IApiResponse<ApiResponse>> {
    const data = await this.service.update(id, dto);
    return ApiResponseBuilder.success().data(data).build();
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete a client' })
  async remove(@Param('id') id: string): Promise<IApiResponse<ApiResponse>> {
    await this.service.remove(id);
    return ApiResponseBuilder.success().message('Client deleted successfully').build();
  }

  @Post(':id/upload-image')
  @ApiOperation({ summary: 'Upload client logo to Cloudinary' })
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
    const data = await this.service.uploadClientImage(id, file);
    return ApiResponseBuilder.success().data(data).build();
  }
}
