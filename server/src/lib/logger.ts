import pino from 'pino';
import { env } from 'src/config/env.config';

const isDev = env.NODE_ENV === 'development';

export const logger = pino({
  level: env.LOG_LEVEL || 'info',

  redact: {
    paths: [
      'req.headers.authorization',
      'req.headers.cookie',
      'password',
      'token',
    ],
    remove: true,
  },

  timestamp: pino.stdTimeFunctions.isoTime,

  ...(isDev && {
    transport: {
      target: 'pino-pretty',
      options: {
        colorize: isDev,
        translateTime: 'SYS:HH:MM:ss.l',
        ignore: 'req,res',
      },
    },
  }),
});
