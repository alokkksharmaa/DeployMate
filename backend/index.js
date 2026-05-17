import express from "express";
import connectDB from "./Models/db.js";
import { createClient } from 'redis';


const app = express();

const client = createClient();
await client.connect();

// Connect to MongoDB
connectDB();

// middleware
app.use(express.json());


// Routes
app.get("/", (req, res) => {
  res.send("Hello world");
});

app.get("/home", (req, res) => {
  res.send("Welcome home");
});

app.get('/Not-Found', (req, res, err) => {
  res.send(err.message);
});

await client.json.set('user:1', '$', {
  name: 'Alice',
  emails: ['alice@example.com', 'alice@work.com'],
  address: { city: 'NYC', zip: '10001' }
});

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`App is running at: http://localhost:${PORT}`);
});
