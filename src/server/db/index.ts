import { drizzle } from "drizzle-orm/postgres-js";
import postgres from "postgres";

import { env } from "~/env"; // or wherever you store DATABASE_URL
import * as schema from "./schema";

// Create a connection to NeonDB (Postgres over HTTP works with `postgres-js`)
const client = postgres(env.DATABASE_URL, { ssl: 'require' }); // add SSL if required

// Use this object to send drizzle queries to your DB
export const db = drizzle(client, { schema });
