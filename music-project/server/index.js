const express = require("express");
const cors = require("cors");
const fs = require("fs");
const path = require("path");

const app = express();

const DATA_PATH = path.join(__dirname, "albums.json");

function loadAlbums() {
    try {
      const fileData = fs.readFileSync(DATA_PATH, "utf-8");
      return JSON.parse(fileData);
    } catch (err) {
      console.error("Error loading albums.json:", err);
      return []; // fallback if file doesn't exist or is broken
    }
  }

// allow frontend on Vite's default port
app.use(
  cors({
    origin: "http://localhost:5173",
  })
);

app.use(express.json());

let albums = loadAlbums();

app.get("/api/albums", (req, res) => {
    res.json(albums);
});

app.get("/api/albums/:id", (req, res) => {
    const id = Number(req.params.id);
    const album = albums.find((a) => a.id === id);
    if (!album) {
      return res.status(404).json({ message: "Album not found" });
    }
    res.json(album);
  });



const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Backend running on http://localhost:${PORT}`);
});
