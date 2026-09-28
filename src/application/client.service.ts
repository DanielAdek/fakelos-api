import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Client, ClientDocument } from '../domain/schema/client.schema';
import { CreateClientDto } from '../presentation/dto/client/create-client.dto';
import { UpdateClientDto } from '../presentation/dto/client/update-client.dto';
import { CloudinaryService } from './cloudinary.service';
import { IClientService } from '../domain/service/IClient.service';

@Injectable()
export class ClientService implements IClientService {
  constructor(
    @InjectModel(Client.name) private clientModel: Model<ClientDocument>,
    private readonly cloudinaryService: CloudinaryService,
  ) {}

  async create(dto: CreateClientDto): Promise<Client> {
    return this.clientModel.create(dto);
  }

  async findAll(): Promise<Client[]> {
    return this.clientModel.find().exec();
  }

  async update(id: string, dto: UpdateClientDto): Promise<Client> {
    const client = await this.clientModel
      .findByIdAndUpdate(id, dto, { new: true })
      .exec();
    if (!client) throw new NotFoundException(`Client with id ${id} not found`);
    return client;
  }

  async remove(id: string): Promise<void> {
    const result = await this.clientModel.findByIdAndDelete(id).exec();
    if (!result) throw new NotFoundException(`Client with id ${id} not found`);
  }

  async uploadClientImage(id: string, file: Express.Multer.File): Promise<Client> {
    const uploaded = await this.cloudinaryService.uploadImage(file);
    const client = await this.clientModel.findById(id).exec();
    if (!client) throw new NotFoundException(`Client with id ${id} not found`);

    client.img = uploaded.secure_url;
    return client.save();
  }
}
