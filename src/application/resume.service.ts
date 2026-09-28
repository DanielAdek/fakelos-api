import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Resume, ResumeDocument } from '../domain/schema/resume.schema';
import { CloudinaryService } from './cloudinary.service';
import { IResumeService } from '../domain/service/IResume.service';

@Injectable()
export class ResumeService implements IResumeService {
  constructor(
    @InjectModel(Resume.name) private resumeModel: Model<ResumeDocument>,
    private readonly cloudinaryService: CloudinaryService,
  ) {}

  async upload(file: Express.Multer.File, title: string, description?: string): Promise<Resume> {
    const uploaded = await this.cloudinaryService.uploadFile(file);
    return this.resumeModel.create({
      title,
      description: description || '',
      fileUrl: uploaded.secure_url,
      isActive: false,
    });
  }

  async findAll(): Promise<Resume[]> {
    return this.resumeModel.find().sort({ createdAt: -1 }).exec();
  }

  async findActive(): Promise<Resume | null> {
    return this.resumeModel.findOne({ isActive: true }).exec();
  }

  async setActive(id: string): Promise<Resume> {
    // Deactivate all resumes first
    await this.resumeModel.updateMany({}, { isActive: false }).exec();

    // Activate the selected one
    const resume = await this.resumeModel
      .findByIdAndUpdate(id, { isActive: true }, { new: true })
      .exec();
    if (!resume) throw new NotFoundException(`Resume with id ${id} not found`);
    return resume;
  }

  async remove(id: string): Promise<void> {
    const result = await this.resumeModel.findByIdAndDelete(id).exec();
    if (!result) throw new NotFoundException(`Resume with id ${id} not found`);
  }
}
