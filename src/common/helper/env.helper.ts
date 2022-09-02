import { existsSync } from 'fs';
import { resolve } from 'path';

export function getEnvPath(dest: string): string {
  const env: string | undefined = process.env.NODE_ENV;
  console.log('env: ', env);
  const fallback: string = resolve(`${dest}/.env`);
  const filename: string = env ? `${env}.env` : 'development.env';
  console.log('filename: ', filename)
  let filePath: string = resolve(`${dest}/${filename}`);
    console.log('filePath: ', filePath)
  if (!existsSync(filePath)) {
    filePath = fallback;
  }

  return filePath;
}