import express from 'express';
import cors from 'cors';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
const __dirname = path.dirname(fileURLToPath(import.meta.url));
const app = express();

import 'dotenv/config';
const PORT = process.env.PORT || 4000;


app.use(cors());
app.use(express.json());

const dbPath = path.join(__dirname, '..', 'db.json');
const readDb = () => JSON.parse(fs.readFileSync(dbPath, 'utf-8'));
app.get('/destinations', (req, res) => {
  const db = readDb();
  const destinations = (db.destination || []).map((d) => ({
    id: d.id,
    name: d.label,
  }));
  res.json(destinations);
});

app.post('/hotels/search', (req, res) => {
  const db = readDb();
  const { destination } = req.body; // payload з форми: { destination, guests, checkIn, checkOut }
  let hotels = db.hotels || [];
  if (destination) {
    hotels = hotels.filter(
      (hotel) => hotel.city?.toLowerCase() === destination.toLowerCase()
    );
  }
  res.json(hotels);
});

app.get('/hotels/:id', (req, res) => {
  const db = readDb();
  const hotel = (db.hotels || []).find((h) => String(h.id) === req.params.id);
  if (!hotel) {
    return res.status(404).json({ message: 'Hotel not found' });
  }
  res.json(hotel);
});
app.listen(PORT, () => {
  console.log(`Express server running on http://localhost:${PORT}`);
});






