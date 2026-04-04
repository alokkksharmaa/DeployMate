import express from "express";

const app = express;

app.use(json());

app.get("/", (req, res) => {
  res.send("Hello world");

});


app.listen(3000, () => {
  console.log("app is running at : port 3000");
});
