import path from 'path';
import { config } from 'dotenv';
import { expand } from 'dotenv-expand';

const configPath = path.resolve(
  __dirname,
  '..',
  '..',
  `.env.${process.env.NODE_ENV ?? 'local'}`
);

expand(config({ path: configPath }));

export const NODE_ENV = process.env.NODE_ENV ?? 'local';
export const MONGO_URL: string = process.env.MONGO_URL ?? '';
export const APP_PORT: number = +(process.env.APP_PORT ?? '3005');
export const SESSION_SECRET: string = process.env.SESSION_SECRET ?? '';
export const JWT_ACCESS_PRIVATE_KEY: string =
  process.env.JWT_ACCESS_PRIVATE_KEY ?? '';
