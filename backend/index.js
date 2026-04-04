import express from "express";

const app = express();

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

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`App is running at: http://localhost:${PORT}`);
});
