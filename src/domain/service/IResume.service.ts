import { Resume } from '../schema/resume.schema';

export interface IResumeService {
  upload(file: Express.Multer.File, title: string, description?: string): Promise<Resume>;
  findAll(): Promise<Resume[]>;
  findActive(): Promise<Resume | null>;
  setActive(id: string): Promise<Resume>;
  remove(id: string): Promise<void>;
}
