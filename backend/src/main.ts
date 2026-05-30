import { NestFactory } from '@nestjs/core';
import { ValidationPipe, BadRequestException, Logger } from '@nestjs/common';
import { AppModule } from './app.module';
import { AllExceptionsFilter } from './core/filters/http-exception.filter';
import { ConfigService } from '@nestjs/config';
import { PrismaClientExceptionFilter } from './core/filters/prisma-exception.filter';
import { HttpAdapterHost } from '@nestjs/core';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const config = app.get(ConfigService);
  const logger = new Logger('Bootstrap');

  const httpAdapterHost = app.get(HttpAdapterHost);
  app.useGlobalFilters(new PrismaClientExceptionFilter(), new AllExceptionsFilter(httpAdapterHost));

  app.useGlobalPipes(
    new ValidationPipe({
      transform: true,
      whitelist: true,
      forbidNonWhitelisted: true,
      exceptionFactory: (errors) => {
        const formattedErrors: Record<string, string[]> = {};

        errors.forEach((error) => {
          if (error.constraints) {
            formattedErrors[error.property] = Object.values(error.constraints);
          }
        });

        return new BadRequestException({
          message: 'Ошибка валидации',
          errors: formattedErrors,
        });
      },
    }),
  );

  app.enableCors({
    origin: [config.get<string>('CORS_ORIGIN', 'http://localhost:3000')],
    methods: ['GET', 'POST', 'PATCH', 'DELETE'],
  });

  const port = config.getOrThrow<number>('BACKEND_PORT');
  logger.log(`Application listening on port ${port}`);
  await app.listen(port);
}
void bootstrap();
