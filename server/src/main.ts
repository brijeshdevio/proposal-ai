import { NestFactory } from '@nestjs/core';
import cookieParser from 'cookie-parser';
import helmet from 'helmet';
import pinoHttp from 'pino-http';
import { env } from 'src/config/env.config';
import { logger } from 'src/lib/logger';

import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('api');
  app.use(
    pinoHttp({
      logger,
      customLogLevel: function (req, res, err) {
        if (res.statusCode >= 500 || err) {
          return 'error';
        }
        if (res.statusCode >= 400) {
          return 'warn';
        }
        return 'info';
      },
    }),
  );
  app.use(helmet());
  app.use(cookieParser());
  await app.listen(process.env.PORT ?? 3000);
}

bootstrap()
  .then(() => {
    logger.info(
      `Server is running on port ${env.PORT} in ${env.NODE_ENV} mode - http://localhost:${env.PORT}`,
    );
  })
  .catch(() => {
    logger.error(`Server failed to start in development mode`);
  });
