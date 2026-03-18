export const API_CONFIG = {
  baseURL: process.env.REACT_APP_API_URL || 'https://api.visionary.com',
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
};
