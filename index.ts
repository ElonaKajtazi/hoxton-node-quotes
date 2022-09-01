import express from "express";
import cors from "cors";
import { quotes, authors } from "./data";

const app = express();
app.use(cors());
app.use(express.json());
const port = 5000;

app.get("/", (req, res) => {
  res.send(`<h1>Quote/Author API</h1>
  <h2>Available resources:</h2>
  <ul>
    <li><a href="/quotes">Quotes</a></li>
    <li><a href="/authors">Authors</a></li>
    <li><a href="/random">Random Quote </a></li>
  </ul>`);
});

app.get("/quotes", (req, res) => {
  let quotesToSend = quotes.map((quote) => {
    let author = authors.find((author) => author.id === quote.authorId);
    return { ...quote, author };
  });

  res.send(quotesToSend);
});

app.get("/quotes/:id", (req, res) => {
  const id = Number(req.params.id);
  const match = quotes.find((quote) => quote.id === id);
  if (match) {
    res.send(match);
  } else {
    res.status(404).send({ error: "Quote not found!" });
  }
});

app.post("/quotes", (req, res) => {
  let errors: string[] = [];
  if (typeof req.body.authorId !== "number") {
    errors.push("authorId not provided or not a number");
  }
  if (typeof req.body.text !== "string") {
    errors.push("text not provided or is not a string");
  }
  let author = authors.find((author) => author.id === req.body.authorId);
  if (!author) {
    errors.push(`Author with id ${req.body.authorId} does not exist`);
  }
  if (errors.length === 0) {
    const newQuote = {
      id: quotes.length === 0 ? 1 : quotes[quotes.length - 1].id + 1,
      authorId: req.body.authorId,
      text: req.body.text,
    };
    quotes.push(newQuote);
    res.send(newQuote);
  } else {
    res.status(400).send({ errors });
  }
});

app.delete("/quotes/:id", (req, res) => {
  const id = Number(req.params.id);
  const indexToDelete = quotes.findIndex((quote) => quote.id === id);
  if (indexToDelete > -1) {
    quotes.splice(indexToDelete, 1);
    res.send({ message: "Quote deleted successfully" });
  } else {
    res.status(404).send({ error: "Quote not found" });
  }
});

app.patch("/quotes/:id", (req, res) => {
  let id = Number(req.params.id);
  let match = quotes.find((quote) => quote.id === id);

  if (match) {
    if (req.body.authorId) {
      match.authorId = req.body.authorId;
    }
    if (req.body.text) {
      match.text = req.body.text;
    }
    res.send(match);
  } else {
    res.status(404).send({ error: "Quote not found" });
  }
});

app.get("/authors", (req, res) => {
  // let ownersToSend = owners.map(owner => {
  //   const foundDogs = dogs.filter(dog => dog.ownerId === owner.id)
  //   return { ...owner, dogs: foundDogs }
  // })
  let authorsToSend = authors.map((author) => {
    const foundQuotes = quotes.filter((quote) => quote.authorId === author.id);

    console.log(foundQuotes);
    return { ...author, quotes: foundQuotes };
  });

  res.send(authorsToSend);
});

app.post("/authors", (req, res) => {
  let errors: string[] = [];
  if (typeof req.body.firstName !== "string") {
    errors.push("firstName not provided or is not a string");
  }
  if (typeof req.body.lastName !== "string") {
    errors.push("lastName not provided or is not a string");
  }
  if (typeof req.body.age !== "number") {
    errors.push("age not provided or is not a string");
  }
  if (typeof req.body.image !== "string") {
    errors.push("image not provided or is not a string");
  }

  if (errors.length === 0) {
    const newAuthor = {
      id: authors.length === 0 ? 1 : authors[authors.length - 1].id + 1,
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      age: req.body.age,
      image: req.body.image,
    };
    authors.push(newAuthor);
    res.send(newAuthor);
  } else {
    res.status(400).send({ errors });
  }
});

app.delete("/authors/:id", (req, res) => {
  const id = Number(req.params.id);
  const indexToDelete = authors.findIndex((author) => author.id === id);
  if (indexToDelete > -1) {
    authors.splice(indexToDelete, 1);
    res.send({ mesagge: "Author deleted successfully" });
  } else {
    res.status(404).send({ error: "Author not found" });
  }
});

app.patch("/authors/:id", (req, res) => {
  let id = Number(req.params.id);
  let match = authors.find((author) => author.id === id);
  if (match) {
    if (req.body.firstName) {
      match.firstName = req.body.firstName;
    }
    if (req.body.lastName) {
      match.lastName = req.body.lastName;
    }
    if (req.body.age) {
      match.age = req.body.age;
    }
    if (req.body.image) {
      match.firstName = req.body.image;
    }
    res.send(match);
  } else {
    res.status(404).send({ error: "Author not found" });
  }
});

app.get("/random", (req, res) => {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  res.send(quotes[randomIndex]);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
