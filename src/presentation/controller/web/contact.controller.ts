import {
  Controller,
  Get,
  Post,
  Delete,
  Body,
  Param,
  Inject,
} from '@nestjs/common';
import { ApiTags, ApiOperation } from '@nestjs/swagger';
import { IContactService } from '../../../domain/service/IContact.service';
import { CreateContactDto } from '../../dto/contact/create-contact.dto';
import { IApiResponse } from '../interface/api-response.interface';
import { ApiResponse, ApiResponseBuilder } from '../../dto/response/api.response';
import { ICONTACT_SERV_TOKEN } from '../../../infrastructure/shared/constants';

@ApiTags('Contact')
@Controller('contact')
export class ContactController {
  constructor(
    @Inject(ICONTACT_SERV_TOKEN) private readonly service: IContactService,
  ) {}

  @Post()
  @ApiOperation({ summary: 'Submit a contact message' })
  async create(@Body() dto: CreateContactDto): Promise<IApiResponse<ApiResponse>> {
    const data = await this.service.create(dto);
    return ApiResponseBuilder.success().data(data).build();
  }

  @Get()
  @ApiOperation({ summary: 'Get all contact messages' })
  async findAll(): Promise<IApiResponse<ApiResponse>> {
    const data = await this.service.findAll();
    return ApiResponseBuilder.success().data(data).build();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get a contact message by ID' })
  async findOne(@Param('id') id: string): Promise<IApiResponse<ApiResponse>> {
    const data = await this.service.findOne(id);
    return ApiResponseBuilder.success().data(data).build();
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete a contact message' })
  async remove(@Param('id') id: string): Promise<IApiResponse<ApiResponse>> {
    await this.service.remove(id);
    return ApiResponseBuilder.success().message('Contact message deleted successfully').build();
  }
}
