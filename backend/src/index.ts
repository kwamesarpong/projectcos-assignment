import { createExpressMiddleware } from "@trpc/server/adapters/express";
import cors from "cors";
import express from "express";
import { appRouter } from "./trpc";

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
// Add a root route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to the backend server!" });
});

app.use(
  "/trpc",
  createExpressMiddleware({
    router: appRouter,
  })
);

if (import.meta.env.PROD) {
  app.listen(port, () => {
    console.log(`Backend server running on port ${port}`);
  });
}

export const viteNodeApp = app;
