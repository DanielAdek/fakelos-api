import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Project, ProjectSchema } from '../schema/project.schema';
import { ProjectService } from '../../application/project.service';
import { ProjectController } from '../../presentation/controller/web/project.controller';
import { IPROJECT_SERV_TOKEN } from '../../infrastructure/shared/constants';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Project.name, schema: ProjectSchema }]),
  ],
  controllers: [ProjectController],
  providers: [
    {
      provide: IPROJECT_SERV_TOKEN,
      useClass: ProjectService,
    },
  ],
  exports: [IPROJECT_SERV_TOKEN],
})
export class ProjectModule {}
