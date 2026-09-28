import 'dotenv/config';
import { NestFactory } from '@nestjs/core';
import { INestApplication } from '@nestjs/common';
import { SwaggerDoc } from './infrastructure/config/docs/swagger.doc';
import { AppConfig } from './infrastructure/config/app/app.config';
import { AppModule } from './app.module';
import { AppLogger } from './infrastructure/logger/logger';

const $logger = new AppLogger();

class MainApplication {
  private static async main(): Promise<void> {
    const app: INestApplication = await NestFactory.create(AppModule);

    AppConfig.appConfig(app);

    AppConfig.getGlobalValidationConfig(app);

    SwaggerDoc.apiDocsConfig(app);

    await app.listen(AppConfig.getAppPort());

    $logger.log(`Application is running on: ${await app.getUrl()}`);
    $logger.log(`Swagger docs available at: ${await app.getUrl()}/api-docs`);
  }

  public static async run(): Promise<void> {
    await this.main();
  }
}

MainApplication.run().catch((error) => $logger.log(error.message));
