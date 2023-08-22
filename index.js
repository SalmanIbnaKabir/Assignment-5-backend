import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import mongoose from "mongoose";
import { BookRoutes } from "./src/module/book/book.route.js";

const PORT = 5000 || process.env.PORT;
dotenv.config();

const app = express();

// middleware
app.use(express.json());
app.use(cors());

// database configuration

async function bootstrap() {
  try {
    await mongoose.connect(process.env.DATABASE_URI);
    console.log("🔋 Database is Connected Successfully");
    app.listen(PORT, () => {
      console.log(`Application listening on  http://localhost:${PORT}`);
    });
  } catch (error) {
    console.log("Failed to connect to database", error);
  }
}
bootstrap();

// default configuration
app.get("/", (req, res) => {
  res.send("book catalog is available");
});

app.use("/api/v1/book", BookRoutes);

// handle not found routes
app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: "NOt found",
    path: req.url,
  });
});
