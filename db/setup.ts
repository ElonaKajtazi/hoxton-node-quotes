import Database from "better-sqlite3";
const db = Database("./db/data.db", { verbose: console.log });

const quotes = [
  {
    id: 1,
    authorId: 1,
    text: '"Goal setting is the secret to a compelling future."',
  },
  {
    id: 2,
    authorId: 2,
    text: '"Experience is a hard teacher because she gives the test first, the lesson afterwards."',
  },
  {
    id: 3,
    authorId: 3,
    text: '"Women challenge the status quo because we are never it."',
  },
  {
    id: 4,
    authorId: 4,
    text: '"We don’t just sit around and wait for other people. We just make, and we do."',
  },
  {
    id: 5,
    authorId: 5,
    text: '"Think like a queen. A queen is not afraid to fail. Failure is another stepping stone to greatness."',
  },
  {
    id: 6,
    authorId: 6,
    text: "Whenever you see a successful woman, look out for three men who are going out of their way to try to block her.",
  },
  {
    id: 7,
    authorId: 7,
    text: '"We need women at all levels, including the top, to change the dynamic, reshape the conversation, to make sure women’s voices are heard and heeded, not overlooked and ignored"',
  },
  {
    id: 8,
    authorId: 5,
    text: "“Surround yourself only with people who are going to take you higher.”",
  },
  {
    id: 9,
    authorId: 5,
    text: "“You don’t become what you want, you become what you believe.”",
  },
];
const authors = [
  {
    id: 1,
    firstName: "Tony",
    lastName: "Robins",
    age: 62,
    image:
      "https://netstorage-briefly.akamaized.net/images/3e85f08c087827f3.jpg?imwidth=900",
  },
  {
    id: 2,
    firstName: "Vern",
    lastName: "Law",
    age: 92,
    image:
      "https://upload.wikimedia.org/wikipedia/commons/5/58/Vern_Law_%285405222334%29_%28cropped%29.jpg",
  },
  {
    id: 3,
    firstName: "Cindy",
    lastName: "Gallop",
    age: 62,
    image:
      "https://dublintechsummit.tech/wp-content/uploads/sites/7/2017/01/cindy-landscape-720x423.jpg",
  },
  {
    id: 4,
    firstName: "Arlan",
    lastName: "Hamillton",
    age: 41,
    image:
      "https://s24806.pcdn.co/wp-content/uploads/2021/05/ArlanHamilton-2019photo-970.jpg",
  },
  {
    id: 5,
    firstName: "Oprah",
    lastName: "Winfrey",
    age: 68,
    image:
      "https://www.thewikifeed.com/wp-content/uploads/2022/04/oprah-winfrey-1.jpg",
  },
  {
    id: 6,
    firstName: "Yulia",
    lastName: "Tymoshenko",
    age: 61,
    image:
      "https://www.thefamouspeople.com/profiles/images/yulia-tymoshenko-1.jpg",
  },
  {
    id: 7,
    firstName: "Sheryl",
    lastName: "Sandberg",
    age: 58,
    image:
      "https://cdn.britannica.com/97/163897-050-A071A905/Sheryl-Sandberg-Facebook.jpg",
  },
];

const dropQuotesTable = db.prepare(`
DROP TABLE IF EXISTS quotes
`);
dropQuotesTable.run();
const createQuotesTable = db.prepare(`
CREATE TABLE IF NOT EXISTs quotes (
    id INTEGER,
    authorId INTEGER,
    text TEXT, 
    PRIMARY KEY(id)
);
`);
createQuotesTable.run();

const createQuote = db.prepare(`
INSERT INTO quotes (authorId, text) VALUES (@authorId, @text);
`);

for (let quote of quotes) createQuote.run(quote);

const dropAuthorsTable = db.prepare(`
DROP TABLE IF EXISTS authors
`);
dropAuthorsTable.run();

const createAuthorsTable = db.prepare(`
CREATE TABLE IF NOT EXISTs authors (
    id INTEGER,
    firstName INTEGER,
    lastName TEXT,
    age INTEGER,
    image TEXT, 
    PRIMARY KEY(id)
);
`);
createAuthorsTable.run();
const createAuthor = db.prepare(`
INSERT INTO authors (firstName, lastName, age, image) VALUES (@firstName, @lastName, @age, @image);
`);
for (let author of authors) createAuthor.run(author);
