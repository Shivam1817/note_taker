import { env } from "./env.js";
import { connectDB } from "./db.js";
import { buildApp } from "./app.js";

async function main() {
  await connectDB();
  const app = buildApp();
  app.listen(env.PORT, () => console.log(`API http://localhost:${env.PORT}`));
}
main().catch((e) => {
  console.error(e);
  process.exit(1);
});
