import { ConfigModuleOptions } from '@nestjs/config';
import * as Joi from 'joi';

export const appConfig: ConfigModuleOptions = {
  isGlobal: true,
  ignoreEnvFile: false,
  envFilePath: '.env',

  // Валидация переменных окружения
  validationSchema: Joi.object({
    DATABASE_URL: Joi.string().uri().required(),
    BACKEND_PORT: Joi.number().default(4000),
    CORS_ORIGIN: Joi.string().default('http://localhost:3000'),
  }),

  validationOptions: {
    allowUnknown: true,
    abortEarly: true,
  },
};
