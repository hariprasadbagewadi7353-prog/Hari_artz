
import express from "express";
import { createServer as createViteServer } from "vite";
import cors from "cors";
import bodyParser from "body-parser";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const DATA_FILE = path.join(__dirname, "drawings.json");

// Initial data if file doesn't exist
const initialData = [
  {
    id: "1",
    title: "The Silent Gaze",
    imageUrl: "https://picsum.photos/seed/art1/800/1000",
    year: "2024",
    medium: "Charcoal & Graphite",
    description: "A study in deep contrast and emotional stillness, focusing on the intensity of a single look."
  },
  {
    id: "2",
    title: "Shadowed Soul",
    imageUrl: "https://picsum.photos/seed/art2/800/1200",
    year: "2023",
    medium: "Charcoal on Paper",
    description: "Exploring the interplay between light and darkness to reveal the hidden layers of character."
  },
  {
    id: "3",
    title: "Eternal Lines",
    imageUrl: "https://picsum.photos/seed/art3/1000/800",
    year: "2024",
    medium: "Graphite Pencil",
    description: "Capturing the timeless beauty of human features through precise line work and soft shading."
  }
];

if (!fs.existsSync(DATA_FILE)) {
  fs.writeFileSync(DATA_FILE, JSON.stringify(initialData, null, 2));
}

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(cors());
  app.use(bodyParser.json({ limit: '50mb' }));
  app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));

  // API Routes
  app.get("/api/drawings", (req, res) => {
    const data = JSON.parse(fs.readFileSync(DATA_FILE, "utf-8"));
    res.json(data);
  });

  app.post("/api/drawings", (req, res) => {
    const newDrawing = {
      ...req.body,
      id: Date.now().toString(),
      year: new Date().getFullYear().toString()
    };
    const data = JSON.parse(fs.readFileSync(DATA_FILE, "utf-8"));
    data.unshift(newDrawing); // Add to beginning
    fs.writeFileSync(DATA_FILE, JSON.stringify(data, null, 2));
    res.status(201).json(newDrawing);
  });

  app.delete("/api/drawings/:id", (req, res) => {
    const { id } = req.params;
    let data = JSON.parse(fs.readFileSync(DATA_FILE, "utf-8"));
    data = data.filter((item: any) => item.id !== id);
    fs.writeFileSync(DATA_FILE, JSON.stringify(data, null, 2));
    res.json({ success: true });
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    app.use(express.static(path.join(__dirname, "dist")));
    app.get("*", (req, res) => {
      res.sendFile(path.join(__dirname, "dist", "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
