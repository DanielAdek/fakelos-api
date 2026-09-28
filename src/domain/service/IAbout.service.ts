import { About } from '../schema/about.schema';
import { CreateAboutDto } from '../../presentation/dto/about/create-about.dto';
import { UpdateAboutDto } from '../../presentation/dto/about/update-about.dto';

export interface IAboutService {
  create(dto: CreateAboutDto): Promise<About>;
  findAll(): Promise<About[]>;
  update(id: string, dto: UpdateAboutDto): Promise<About>;
  remove(id: string): Promise<void>;
  replaceAll(dtos: CreateAboutDto[]): Promise<About[]>;
}
