import { Db, MongoClient } from "mongodb";

const url: string = process.env.DB_URL!;

let db: Db;

export const connectDB = async () => {
  if (db) return db;

  try {
    const client = new MongoClient(url);
    await client.connect();
    db = client.db("Test!!");
    return db;
  }
  catch (e) {
    throw new Error("DB 연결 중 에러가 발생했어요");
  }
}

export const getDB = () => {
  if (!db) {
    throw new Error("DB 변수에 값이 할당되기 전에 DB변수를 호출했어요");
  }

  return db;
}