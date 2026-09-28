import { Injectable } from '@nestjs/common';
import { v2 as cloudinary, UploadApiResponse } from 'cloudinary';
import { envManager } from '../infrastructure/config/env/env.manager';
import { CLOUDINARY_FOLDER } from '../infrastructure/shared/constants';

@Injectable()
export class CloudinaryService {
  constructor() {
    cloudinary.config({
      cloud_name: envManager.getEnvValue('CLOUDINARY_CLOUD_NAME'),
      api_key: envManager.getEnvValue('CLOUDINARY_API_KEY'),
      api_secret: envManager.getEnvValue('CLOUDINARY_API_SECRET'),
    });
  }

  async uploadImage(file: Express.Multer.File): Promise<UploadApiResponse> {
    return new Promise((resolve, reject) => {
      const uploadStream = cloudinary.uploader.upload_stream(
        {
          folder: CLOUDINARY_FOLDER,
          resource_type: 'image',
        },
        (error, result) => {
          if (error) return reject(error);
          resolve(result!);
        },
      );
      uploadStream.end(file.buffer);
    });
  }

  async uploadImageFromUrl(url: string): Promise<UploadApiResponse> {
    return cloudinary.uploader.upload(url, {
      folder: CLOUDINARY_FOLDER,
      resource_type: 'image',
    });
  }

  async uploadFile(file: Express.Multer.File): Promise<UploadApiResponse> {
    return new Promise((resolve, reject) => {
      const uploadStream = cloudinary.uploader.upload_stream(
        {
          folder: CLOUDINARY_FOLDER,
          resource_type: 'raw',
        },
        (error, result) => {
          if (error) return reject(error);
          resolve(result!);
        },
      );
      uploadStream.end(file.buffer);
    });
  }

  async deleteImage(publicId: string): Promise<any> {
    return cloudinary.uploader.destroy(publicId);
  }
}
