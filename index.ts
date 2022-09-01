import express from "express";
import cors from "cors";
import { quotes, authors, quoteType } from "./data";
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
  </ul>`);
});
app.get("/quotes", (req, res) => {
  let quotesToSend = quotes.map((quote) => {
    let author = authors.find((author) => author.id === quote.authorId);
    return { ...quote, author };
  });

  // let quotesToSend = quotes;
  // console.log(Number(req.query.quantity))
  // if (req.query.age) {
  //   quotesToSend = quotesToSend.filter(
  //     (quote) => quote.age === Number(req.query.age)
  //   );
  // }
  // if (req.query.quote) {
  //   quotesToSend = quotesToSend.filter((quote) =>
  //     //@ts-ignore
  //     quote.quote.toLowerCase().includes(req.query.quote.toLowerCase())
  //   );
  // }
  res.send(quotesToSend);
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
// app.post("/quotes", (req, res) => {
//   let errors: string[] = [];
//   if (typeof req.body.firstName !== "string") {
//     errors.push("FirstName not provided or not a string.");
//   }
//   if (typeof req.body.lastName !== "string") {
//     errors.push("LastName not provided or not a string.");
//   }
//   if (typeof req.body.age !== "number") {
//     errors.push("age not provided or not a number.");
//   }
//   if (typeof req.body.image !== "string") {
//     errors.push("image not provided or not a valid url.");
//   }
//   if (typeof req.body.quote !== "string") {
//     errors.push("Quote not provided or not a string.");
//   }
//   if (errors.length === 0) {
//     const newQuote = {
//       id: quotes[quotes.length - 1].id + 1,
//       firstName: req.body.firstName,
//       lastName: req.body.lastName,
//       age: req.body.age,
//       image: req.body.image,
//       quote: req.body.quote,
//     };
//     quotes.push(newQuote);
//     res.send(newQuote);
//   } else {
//     res.status(400).send({ errors: errors });
//   }
// });
// app.get("/quotes", (req, res) => {
//   res.send(quotes);
// });
// app.get("/quotes/:id", (req, res) => {
//   const id = Number(req.params.id);
//   const match = quotes.find((quote) => quote.id === id);
//   if (match) {
//     res.send(match);
//   } else {
//     res.status(404).send({ error: "Quote not found!" });
//   }
// });

// app.get("/random", (req, res) => {
//   const randomIndex = Math.floor(Math.random() * quotes.length);
//   res.send(quotes[randomIndex]);
// });
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
