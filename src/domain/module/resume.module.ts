import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Resume, ResumeSchema } from '../schema/resume.schema';
import { ResumeService } from '../../application/resume.service';
import { ResumeController } from '../../presentation/controller/web/resume.controller';
import { IRESUME_SERV_TOKEN } from '../../infrastructure/shared/constants';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Resume.name, schema: ResumeSchema }]),
  ],
  controllers: [ResumeController],
  providers: [
    {
      provide: IRESUME_SERV_TOKEN,
      useClass: ResumeService,
    },
  ],
  exports: [IRESUME_SERV_TOKEN],
})
export class ResumeModule {}
