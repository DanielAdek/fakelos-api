import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Contact, ContactSchema } from '../schema/contact.schema';
import { ContactService } from '../../application/contact.service';
import { ContactController } from '../../presentation/controller/web/contact.controller';
import { ICONTACT_SERV_TOKEN } from '../../infrastructure/shared/constants';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Contact.name, schema: ContactSchema }]),
  ],
  controllers: [ContactController],
  providers: [
    {
      provide: ICONTACT_SERV_TOKEN,
      useClass: ContactService,
    },
  ],
  exports: [ICONTACT_SERV_TOKEN],
})
export class ContactModule {}
