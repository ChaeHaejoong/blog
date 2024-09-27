import mysql from "mysql2/promise";

const dbconfig = {
  host: 'localhost',
  user: 'root',
  password: process.env.DB_PW,
  database: 'blog'
}

const pool = mysql.createPool(dbconfig);

export const query = async (sql: string, params?: any[]) => {
  try {
    const [rows] = await pool.query(sql, params);
    return rows;
  } catch (error) {
    console.error("쿼리 실행 중 에러:", error);
    throw error;
  }
}

export const closeConnection = async () => {
  await pool.end();
}