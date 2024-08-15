import { drizzle } from "drizzle-orm/postgres-js";
import { Client } from "pg";

const client = new Client({
  connectionString: process.env.DATABASE_URL,
});

if (!process.env.DATABASE_URL) throw new Error("DATABASE_URL is not set");

await client.connect();

export const db = drizzle(client);