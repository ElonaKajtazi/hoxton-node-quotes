import express from "express";
import cors from "cors";
const app = express();
const port = 5000;

const quotes = [
  {
    id: 1,
    author: {
      firstName: "Tony",
      lastName: "Robins",
      age: 62,
      image:
        "https://netstorage-briefly.akamaized.net/images/3e85f08c087827f3.jpg?imwidth=900",
    },
    quote: '"Goal setting is the secret to a compelling future."',
  },
  {
    id: 2,
    author: {
      firstName: "Vern",
      lastName: "Law",
      age: 92,
      image:
        "https://upload.wikimedia.org/wikipedia/commons/5/58/Vern_Law_%285405222334%29_%28cropped%29.jpg",
    },
    quote:
      '"Experience is a hard teacher because she gives the test first, the lesson afterwards."',
  },
  {
    id: 3,
    author: {
      firstName: "Cindy",
      lastName: "Gallop",
      age: 62,
      image:
        "https://dublintechsummit.tech/wp-content/uploads/sites/7/2017/01/cindy-landscape-720x423.jpg",
    },
    quote: '"Women challenge the status quo because we are never it."',
  },
  {
    id: 4,
    author: "Joe Kennedy",
    quote: '"When the going gets tough, the tough get going."',
  },
  {
    id: 5,
    author: "Mahatma Gandhi",
    quote: '"You must be the change you wish to see in the world."',
  },
  {
    id: 6,
    author: "Henry Ford",
    quote: '"Whether you think you can or you think you can’t, you’re right."',
  },
  {
    id: 7,
    author: "Forrest Gump",
    quote:
      '"Life is like a box of chocolates. You never know what you’re going to get."',
  },
];

app.use(cors());
app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/quotes", (req, res) => {
  res.send(quotes);
});
app.get("/random", (req, res) => {
  res.send(quotes[Math.floor(Math.random() * quotes.length)]);
});
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
