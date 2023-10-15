require('dotenv').config();
const express = require('express');

const app = express();

const PORT = process.env.PORT;

const logger = (req, res, next) => {
  console.log(`Recieved ${req.method} on ${req.url}`);
  next();
};

app.use(express.json());
app.use(logger);

app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});

app.get('/', (req, res) => {
  res.send('Hello world');
});

const books = [
  {
    id: 1,
    title: 'Harry Potter and the Chamber of Secrets',
    author: 'J.K. Rowling',
    year: 1998,
    pages: 251,
    publisher: 'Bloomsbury',
    language: 'English',
  },
  {
    id: 2,
    title: 'Clean Code',
    author: 'Some other author',
    year: 1999,
    pages: 317,
    publisher: 'Bloomsbury',
    language: 'English',
  },
];

app.get('/api/books', (req, res) => {
  res.send(books);
});

app.get('/api/books/:id', (req, res) => {
  const { id } = req.params;
  res.send(books[id - 1]);
});

app.post('/api/books', (req, res) => {
  const newBook = req.body;
  const id = books.length + 1;
  newBook.id = id;
  books.push(newBook);
  res.send(newBook);
});

app.put('/api/books/:id', (req, res) => {
  const { id } = req.params;
  const updatedBook = req.body;
  books.splice(id - 1, 1);
  updatedBook.id = id;
  books.push(updatedBook);
  res.send(updatedBook);
});

app.delete('/api/books/:id', (req, res) => {
  const { id } = req.params;
  const deletedBook = books[id - 1];
  books.splice(id - 1, 1);
  res.send(deletedBook);
});
