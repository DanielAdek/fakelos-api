import { CoverLetter } from '../schema/cover-letter.schema';

export interface ICoverLetterService {
  upload(file: Express.Multer.File, title: string, description?: string): Promise<CoverLetter>;
  findAll(): Promise<CoverLetter[]>;
  findActive(): Promise<CoverLetter | null>;
  setActive(id: string): Promise<CoverLetter>;
  remove(id: string): Promise<void>;
}
