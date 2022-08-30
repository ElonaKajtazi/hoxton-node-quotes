import express from "express";
import cors from "cors";
const app = express();
const port = 5000;

const quotes = [
  {
    id: 1,
    author: "Lao Tzu",
    quote: '"The journey of a thousand miles begins with one step."',
  },
  {
    id: 2,
    author: "Friedrich Nietzsche",
    quote: '"That which does not kill us makes us stronger."',
  },
  {
    id: 3,
    author: "John Lennon",
    quote: '"Life is what happens when you’re busy making other plans."',
  },
  {
    id: 1,
    author: "Joe Kennedy",
    quote: '"When the going gets tough, the tough get going."',
  },
];
// const randomQuote = Math.floor(Math.random() * quotes.length);

app.use(cors());
app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/quotes", (req, res) => {
  res.send(quotes);
});
app.get("/quote", (req, res) => {
  res.send(quotes[1]);
});
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
  //   console.log(getRandomItem(quotes));
});
