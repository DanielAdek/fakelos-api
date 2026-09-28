import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { About, AboutDocument } from '../domain/schema/about.schema';
import { CreateAboutDto } from '../presentation/dto/about/create-about.dto';
import { UpdateAboutDto } from '../presentation/dto/about/update-about.dto';
import { IAboutService } from '../domain/service/IAbout.service';

@Injectable()
export class AboutService implements IAboutService {
  constructor(
    @InjectModel(About.name) private aboutModel: Model<AboutDocument>,
  ) {}

  async create(dto: CreateAboutDto): Promise<About> {
    return this.aboutModel.create(dto);
  }

  async findAll(): Promise<About[]> {
    return this.aboutModel.find().sort({ order: 1 }).exec();
  }

  async update(id: string, dto: UpdateAboutDto): Promise<About> {
    const about = await this.aboutModel
      .findByIdAndUpdate(id, dto, { new: true })
      .exec();
    if (!about) throw new NotFoundException(`About entry with id ${id} not found`);
    return about;
  }

  async remove(id: string): Promise<void> {
    const result = await this.aboutModel.findByIdAndDelete(id).exec();
    if (!result) throw new NotFoundException(`About entry with id ${id} not found`);
  }

  async replaceAll(dtos: CreateAboutDto[]): Promise<About[]> {
    await this.aboutModel.deleteMany({});
    const items = dtos.map((dto, index) => ({ ...dto, order: dto.order ?? index }));
    return this.aboutModel.insertMany(items);
  }
}
