import { integer, text, pgTable } from "drizzle-orm/pg-core";

export const Users = pgTable("users", {
  id: integer("id").primaryKey().notNull(),
  name: text("name").notNull(),
  email: text("email").notNull(),
  password: text("password").notNull(),
  role: text("role").notNull(),
  created_at: text("created_at").notNull(),
  updated_at: text("updated_at").notNull(),
});