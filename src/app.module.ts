import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { envManager } from './infrastructure/config/env/env.manager';
import { CloudinaryModule } from './domain/module/cloudinary.module';
import { ProjectModule } from './domain/module/project.module';
import { AboutModule } from './domain/module/about.module';
import { ClientModule } from './domain/module/client.module';
import { ContactModule } from './domain/module/contact.module';
import { ResumeModule } from './domain/module/resume.module';
import { CoverLetterModule } from './domain/module/cover-letter.module';
import { AppLogger } from './infrastructure/logger/logger';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    MongooseModule.forRoot(envManager.getEnvValue('MONGODB_URI')),
    CloudinaryModule,
    ProjectModule,
    AboutModule,
    ClientModule,
    ContactModule,
    ResumeModule,
    CoverLetterModule,
  ],
  controllers: [AppController],
  providers: [AppService, AppLogger],
})
export class AppModule {}
