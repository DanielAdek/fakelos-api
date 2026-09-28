import { Contact } from '../schema/contact.schema';
import { CreateContactDto } from '../../presentation/dto/contact/create-contact.dto';

export interface IContactService {
  create(dto: CreateContactDto): Promise<Contact>;
  findAll(): Promise<Contact[]>;
  findOne(id: string): Promise<Contact>;
  remove(id: string): Promise<void>;
}
