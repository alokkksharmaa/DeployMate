import express from "express";

const app = express();

// middleware
app.use(express.json());


// Routes
app.get("/", (req, res) => {
  res.send("Hello world");

});


const PORT = 3000;

app.listen(PORT, () => {
  console.log(`App is running at: http://localhost:${PORT}`);
});
