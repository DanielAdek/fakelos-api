import { INestApplication, ValidationPipe } from '@nestjs/common';
import { envManager } from '../env/env.manager';

export class AppConfig {
  public static appConfig(app: INestApplication): void {
    app.setGlobalPrefix('/api');
    app.enableCors({
      origin: '*',
      methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH', 'OPTIONS'],
      allowedHeaders: ['Content-Type', 'Authorization', 'X-Requested-With'],
      credentials: false,
    });
  }

  public static getAppPort(): number {
    return parseInt(envManager.getEnvValue('APP_PORT'), 10) || 5050;
  }

  public static getGlobalValidationConfig(app: INestApplication): void {
    app.useGlobalPipes(
      new ValidationPipe({
        transform: true,
        transformOptions: {
          enableImplicitConversion: true,
        },
        whitelist: true,
        forbidNonWhitelisted: false,
      }),
    );
  }
}
