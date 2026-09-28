import { Project } from '../schema/project.schema';
import { CreateProjectDto } from '../../presentation/dto/project/create-project.dto';
import { UpdateProjectDto } from '../../presentation/dto/project/update-project.dto';

export interface IProjectService {
  create(dto: CreateProjectDto): Promise<Project>;
  findAll(): Promise<Project[]>;
  findOne(id: string): Promise<Project>;
  update(id: string, dto: UpdateProjectDto): Promise<Project>;
  remove(id: string): Promise<void>;
  uploadProjectImage(id: string, file: Express.Multer.File): Promise<Project>;
  addProjectGalleryImage(id: string, file: Express.Multer.File, title: string): Promise<Project>;
}
