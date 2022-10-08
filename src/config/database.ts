import dotenv from "dotenv";
import { Options } from "sequelize";

interface IConfig {
  development: Options;
  staging: Options;
  production: Options;
}

dotenv.config();

const configDB: IConfig = {
  development: {
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    host: process.env.DB_HOST,
    port: Number(process.env.DB_PORT),
    dialect: "mysql",
  },
  staging: {
    username: process.env.STAGING_DB_USERNAME,
    password: process.env.STAGING_DB_PASSWORD,
    database: process.env.STAGING_DB_DATABASE,
    host: process.env.STAGING_DB_HOST,
    port: Number(process.env.STAGING_DB_PORT),
    dialect: "mysql",
  },
  production: {
    username: process.env.PROD_DB_USERNAME,
    password: process.env.PROD_DB_PASSWORD,
    database: process.env.PROD_DB_DATABASE,
    host: process.env.PROD_DB_HOST,
    port: Number(process.env.DB_PORT),
    dialect: "mysql",
  },
};

// Using export when compile to js
// module.exports
export = configDB;
