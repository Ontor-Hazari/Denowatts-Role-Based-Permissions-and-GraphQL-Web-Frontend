import fs from 'fs';

export const saveAuthToken = (token: string, filePath: string): void => {
  fs.writeFileSync(filePath, token, 'utf-8');
};

export const getAuthToken = (filePath: string): string => {
  if (fs.existsSync(filePath)) {
    return fs.readFileSync(filePath, 'utf-8');
  }
  throw new Error('Access token not found. Please log in again.');
};
