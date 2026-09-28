import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CoverLetter, CoverLetterSchema } from '../schema/cover-letter.schema';
import { CoverLetterService } from '../../application/cover-letter.service';
import { CoverLetterController } from '../../presentation/controller/web/cover-letter.controller';
import { ICOVER_LETTER_SERV_TOKEN } from '../../infrastructure/shared/constants';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: CoverLetter.name, schema: CoverLetterSchema }]),
  ],
  controllers: [CoverLetterController],
  providers: [
    {
      provide: ICOVER_LETTER_SERV_TOKEN,
      useClass: CoverLetterService,
    },
  ],
  exports: [ICOVER_LETTER_SERV_TOKEN],
})
export class CoverLetterModule {}
