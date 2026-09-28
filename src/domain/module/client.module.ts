import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Client, ClientSchema } from '../schema/client.schema';
import { ClientService } from '../../application/client.service';
import { ClientController } from '../../presentation/controller/web/client.controller';
import { ICLIENT_SERV_TOKEN } from '../../infrastructure/shared/constants';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Client.name, schema: ClientSchema }]),
  ],
  controllers: [ClientController],
  providers: [
    {
      provide: ICLIENT_SERV_TOKEN,
      useClass: ClientService,
    },
  ],
  exports: [ICLIENT_SERV_TOKEN],
})
export class ClientModule {}
