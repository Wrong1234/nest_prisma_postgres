import { Injectable, BadRequestException } from '@nestjs/common';
import { cloudinary, configureCloudinary } from '../../config/cloudinary.config';

@Injectable()
export class CloudinaryService {
  constructor() {
    configureCloudinary();
  }

  async uploadImage(
    file: Express.Multer.File,
    folder: string = 'profiles',
  ): Promise<string> {
    if (!file) throw new BadRequestException('No file provided');

    return new Promise((resolve, reject) => {
      const uploadStream = cloudinary.uploader.upload_stream(
        {
          folder,
          resource_type: 'image',
          transformation: [
            { width: 500, height: 500, crop: 'fill', gravity: 'face' },
            { quality: 'auto', fetch_format: 'auto' },
          ],
        },
        (error, result) => {
          if (error || !result) return reject(new BadRequestException('Image upload failed'));
          resolve(result.secure_url);
        },
      );
      uploadStream.end(file.buffer);
    });
  }

  async deleteImage(imageUrl: string): Promise<void> {
    if (!imageUrl) return;
    // Extract public_id from URL
    const parts = imageUrl.split('/');
    const filename = parts[parts.length - 1].split('.')[0];
    const folder = parts[parts.length - 2];
    const publicId = `${folder}/${filename}`;

    await cloudinary.uploader.destroy(publicId);
  }
}