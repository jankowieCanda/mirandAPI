import mysql from 'mysql2';
import dotenv from 'dotenv';
dotenv.config();

export const connection = mysql.createConnection({
  /* host: process.env.HOST, */
  user: process.env.USER,
  database: process.env.SQL_DATABASE,
});