export const CONFIGURATION = () => ({
  NODE_ENV: process.env.NODE_ENV,
  app: {
    port: parseInt(process.env.APP_PORT) || 3000
  },
  database: {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    name: process.env.DB_NAME

  }
});
