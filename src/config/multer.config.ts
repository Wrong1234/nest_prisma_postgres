import { BadRequestException } from '@nestjs/common';
import { memoryStorage } from 'multer';

export const multerConfig = {
  storage: memoryStorage(), // Keep file in memory, upload directly to Cloudinary
  limits: {
    fileSize: 5 * 1024 * 1024, // 5MB max
  },
  fileFilter: (req: any, file: Express.Multer.File, callback: Function) => {
    if (!file.mimetype.match(/\/(jpg|jpeg|png|webp)$/)) {
      return callback(
        new BadRequestException('Only image files are allowed (jpg, jpeg, png, webp)'),
        false,
      );
    }
    callback(null, true);
  },
};