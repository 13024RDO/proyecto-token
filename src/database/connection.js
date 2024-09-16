import { createPool } from "mysql2/promise";
import {
  DB_HOST,
  DB_NAME,
  DB_PASSWORD,
  DB_PORT,
  DB_USER,
} from "../settings/env.js";

const createMyPool = () => {
  try {
    const pool = createPool({
      database: DB_NAME,
      password: DB_PASSWORD,
      user: DB_USER,
      host: DB_HOST,
      port: DB_PORT,
    });
    return pool;
  } catch (error) {
    console.log("Hubo un error al conectar con la base de datos");
  }
};

const conn = createMyPool();

export { conn };
