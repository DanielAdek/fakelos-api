import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { About, AboutSchema } from '../schema/about.schema';
import { AboutService } from '../../application/about.service';
import { AboutController } from '../../presentation/controller/web/about.controller';
import { IABOUT_SERV_TOKEN } from '../../infrastructure/shared/constants';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: About.name, schema: AboutSchema }]),
  ],
  controllers: [AboutController],
  providers: [
    {
      provide: IABOUT_SERV_TOKEN,
      useClass: AboutService,
    },
  ],
  exports: [IABOUT_SERV_TOKEN],
})
export class AboutModule {}
