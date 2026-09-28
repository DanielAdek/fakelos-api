import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CoverLetter, CoverLetterDocument } from '../domain/schema/cover-letter.schema';
import { CloudinaryService } from './cloudinary.service';
import { ICoverLetterService } from '../domain/service/ICoverLetter.service';

@Injectable()
export class CoverLetterService implements ICoverLetterService {
  constructor(
    @InjectModel(CoverLetter.name) private coverLetterModel: Model<CoverLetterDocument>,
    private readonly cloudinaryService: CloudinaryService,
  ) {}

  async upload(file: Express.Multer.File, title: string, description?: string): Promise<CoverLetter> {
    const uploaded = await this.cloudinaryService.uploadFile(file);
    return this.coverLetterModel.create({
      title,
      description: description || '',
      fileUrl: uploaded.secure_url,
      isActive: false,
    });
  }

  async findAll(): Promise<CoverLetter[]> {
    return this.coverLetterModel.find().sort({ createdAt: -1 }).exec();
  }

  async findActive(): Promise<CoverLetter | null> {
    return this.coverLetterModel.findOne({ isActive: true }).exec();
  }

  async setActive(id: string): Promise<CoverLetter> {
    await this.coverLetterModel.updateMany({}, { isActive: false }).exec();
    const doc = await this.coverLetterModel
      .findByIdAndUpdate(id, { isActive: true }, { new: true })
      .exec();
    if (!doc) throw new NotFoundException(`Cover letter with id ${id} not found`);
    return doc;
  }

  async remove(id: string): Promise<void> {
    const result = await this.coverLetterModel.findByIdAndDelete(id).exec();
    if (!result) throw new NotFoundException(`Cover letter with id ${id} not found`);
  }
}
