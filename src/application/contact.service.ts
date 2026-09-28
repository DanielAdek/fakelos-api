import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Contact, ContactDocument } from '../domain/schema/contact.schema';
import { CreateContactDto } from '../presentation/dto/contact/create-contact.dto';
import { IContactService } from '../domain/service/IContact.service';

@Injectable()
export class ContactService implements IContactService {
  constructor(
    @InjectModel(Contact.name) private contactModel: Model<ContactDocument>,
  ) {}

  async create(dto: CreateContactDto): Promise<Contact> {
    return this.contactModel.create(dto);
  }

  async findAll(): Promise<Contact[]> {
    return this.contactModel.find().sort({ createdAt: -1 }).exec();
  }

  async findOne(id: string): Promise<Contact> {
    const contact = await this.contactModel.findById(id).exec();
    if (!contact) throw new NotFoundException(`Contact with id ${id} not found`);
    return contact;
  }

  async remove(id: string): Promise<void> {
    const result = await this.contactModel.findByIdAndDelete(id).exec();
    if (!result) throw new NotFoundException(`Contact with id ${id} not found`);
  }
}
