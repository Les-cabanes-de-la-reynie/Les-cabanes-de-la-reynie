import "dotenv/config"
import { defineConfig, env } from "prisma/config"

export default defineConfig({
  schema: "prisma/schema.prisma",
  migrations: {
    path: "prisma/migrations",
  },
  datasource: {
    // Migrations need the direct (non-pooled) URL: PgBouncer can't hold advisory locks
    url: env("DIRECT_DATABASE_URL"),
  },
})
