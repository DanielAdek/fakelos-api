import { INestApplication } from '@nestjs/common';
import {
  DocumentBuilder,
  OpenAPIObject,
  SwaggerModule,
} from '@nestjs/swagger';

export class SwaggerDoc {
  public static apiDocsConfig(app: INestApplication): void {
    const config: Omit<OpenAPIObject, 'paths'> = new DocumentBuilder()
      .setTitle('Fakelos Portfolio API')
      .setDescription('API for managing portfolio projects, about info, clients, and contact messages')
      .setVersion('1.0.0')
      .build();
    const document: OpenAPIObject = SwaggerModule.createDocument(app, config);
    SwaggerModule.setup('api-docs', app, document);
  }
}
