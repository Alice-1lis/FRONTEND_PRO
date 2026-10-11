import "dotenv/config";
import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import rateLimit from "express-rate-limit";
import Like from "./models/Like.js";

const app = express();
const PORT = process.env.PORT || 4000;

// Render стоїть за проксі, без цього ліміт запитів рахується неправильно
app.set("trust proxy", 1);

app.use(
  cors({
    origin: (process.env.CLIENT_ORIGIN || "http://localhost:5173")
      .split(",")
      .map((s) => s.trim()),
  })
);
app.use(express.json());

// Не більше 60 запитів на хвилину з однієї адреси
app.use("/api", rateLimit({ windowMs: 60 * 1000, limit: 60 }));

// Дозволяємо лише id виду post-0 ... cert-99, щоб у базу не писали сміття
const ID_PATTERN = /^(post|cert)-\d{1,2}$/;

app.get("/", (req, res) => res.send("API is running"));

// GET /api/likes  ->  { "post-0": 5, "cert-3": 2 }
app.get("/api/likes", async (req, res) => {
  try {
    const rows = await Like.find().lean();
    const counts = Object.fromEntries(rows.map((r) => [r.cardId, r.count]));
    res.json(counts);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Server error" });
  }
});

// POST /api/likes/:id  body: { "delta": 1 } або { "delta": -1 }
app.post("/api/likes/:id", async (req, res) => {
  const { id } = req.params;
  const { delta } = req.body ?? {}; // ✏️ ЗМІНЕНО: захист від порожнього тіла в Express 5

  if (!ID_PATTERN.test(id)) {
    return res.status(400).json({ error: "Invalid card id" });
  }
  if (delta !== 1 && delta !== -1) {
    return res.status(400).json({ error: "delta must be 1 or -1" });
  }

  try {
    let doc;
    if (delta === 1) {
      doc = await Like.findOneAndUpdate(
        { cardId: id },
        { $inc: { count: 1 } },
        { upsert: true, returnDocument: "after" } 
      );
    } else {
      // Мінус тільки якщо лічильник більший за 0, щоб не піти нижче нуля
      doc = await Like.findOneAndUpdate(
        { cardId: id, count: { $gt: 0 } },
        { $inc: { count: -1 } },
        { returnDocument: "after" } 
      );
    }
    res.json({ id, count: doc ? doc.count : 0 });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Server error" });
  }
});

mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => {
    console.log("MongoDB connected");
    app.listen(PORT, () => console.log(`Server on port ${PORT}`));
  })
  .catch((err) => {
    console.error("MongoDB connection error:", err.message);
    process.exit(1);
  });