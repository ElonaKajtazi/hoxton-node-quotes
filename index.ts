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
    author: {
      firstName: "Arlan",
      lastName: "Hamillton",
      age: 41,
      image:
        "https://s24806.pcdn.co/wp-content/uploads/2021/05/ArlanHamilton-2019photo-970.jpg",
    },
    quote:
      '"We don’t just sit around and wait for other people. We just make, and we do."',
  },
  {
    id: 5,
    author: {
      firstName: "Oprah",
      lastName: "Winfrey",
      age: 68,
      image:
        "https://www.thewikifeed.com/wp-content/uploads/2022/04/oprah-winfrey-1.jpg",
    },
    quote:
      '"Think like a queen. A queen is not afraid to fail. Failure is another stepping stone to greatness."',
  },
  {
    id: 6,
    author: {
      firstName: "Yulia",
      lastName: "Tymoshenko",
      age: 61,
      image:
        "https://www.thefamouspeople.com/profiles/images/yulia-tymoshenko-1.jpg",
    },
    quote:
      "Whenever you see a successful woman, look out for three men who are going out of their way to try to block her.",
  },
  {
    id: 7,
    author: {
      firstName: "Sheryl",
      lastName: "Sandberg",
      age: 58,
      image:
        "https://cdn.britannica.com/97/163897-050-A071A905/Sheryl-Sandberg-Facebook.jpg",
    },
    quote:
      '"We need women at all levels, including the top, to change the dynamic, reshape the conversation, to make sure women’s voices are heard and heeded, not overlooked and ignored"',
  },
];

app.use(cors());
app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/quotes", (req, res) => {
  res.send(quotes);
});
app.get("/quotes/:id", (req, res) => {
  const id = Number(req.params.id);
  const match = quotes.find(quote => quote.id === id)
  if(match) {
    res.send(match);
  } else {
    res.status(404).send({error: "Quote not found!"})
  }

});
app.get("/random", (req, res) => {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  res.send(quotes[randomIndex]);
});
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
