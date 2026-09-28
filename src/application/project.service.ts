import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Project, ProjectDocument } from '../domain/schema/project.schema';
import { CreateProjectDto } from '../presentation/dto/project/create-project.dto';
import { UpdateProjectDto } from '../presentation/dto/project/update-project.dto';
import { CloudinaryService } from './cloudinary.service';
import { IProjectService } from '../domain/service/IProject.service';

@Injectable()
export class ProjectService implements IProjectService {
  constructor(
    @InjectModel(Project.name) private projectModel: Model<ProjectDocument>,
    private readonly cloudinaryService: CloudinaryService,
  ) {}

  async create(dto: CreateProjectDto): Promise<Project> {
    return this.projectModel.create(dto);
  }

  async findAll(): Promise<Project[]> {
    return this.projectModel.find().sort({ createdAt: -1 }).exec();
  }

  async findOne(id: string): Promise<Project> {
    const project = await this.projectModel.findById(id).exec();
    if (!project) throw new NotFoundException(`Project with id ${id} not found`);
    return project;
  }

  async update(id: string, dto: UpdateProjectDto): Promise<Project> {
    const project = await this.projectModel
      .findByIdAndUpdate(id, dto, { new: true })
      .exec();
    if (!project) throw new NotFoundException(`Project with id ${id} not found`);
    return project;
  }

  async remove(id: string): Promise<void> {
    const result = await this.projectModel.findByIdAndDelete(id).exec();
    if (!result) throw new NotFoundException(`Project with id ${id} not found`);
  }

  async uploadProjectImage(id: string, file: Express.Multer.File): Promise<Project> {
    const uploaded = await this.cloudinaryService.uploadImage(file);
    const project = await this.projectModel.findById(id).exec();
    if (!project) throw new NotFoundException(`Project with id ${id} not found`);

    project.img = uploaded.secure_url;
    return project.save();
  }

  async addProjectGalleryImage(
    id: string,
    file: Express.Multer.File,
    title: string,
  ): Promise<Project> {
    const uploaded = await this.cloudinaryService.uploadImage(file);
    const project = await this.projectModel.findById(id).exec();
    if (!project) throw new NotFoundException(`Project with id ${id} not found`);

    project.ProjectImages.push({ title, img: uploaded.secure_url });
    return project.save();
  }
}
