import { Client } from '../schema/client.schema';
import { CreateClientDto } from '../../presentation/dto/client/create-client.dto';
import { UpdateClientDto } from '../../presentation/dto/client/update-client.dto';

export interface IClientService {
  create(dto: CreateClientDto): Promise<Client>;
  findAll(): Promise<Client[]>;
  update(id: string, dto: UpdateClientDto): Promise<Client>;
  remove(id: string): Promise<void>;
  uploadClientImage(id: string, file: Express.Multer.File): Promise<Client>;
}
