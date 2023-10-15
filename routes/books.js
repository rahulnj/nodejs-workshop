const express = require('express');
const router = express.Router();

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

router.get('/', (req, res) => {
  res.send(books);
});

router.get('/:id', (req, res) => {
  const { id } = req.params;
  res.send(books[id - 1]);
});

router.post('/', (req, res) => {
  const newBook = req.body;
  const id = books.length + 1;
  newBook.id = id;
  books.push(newBook);
  res.send(newBook);
});

router.put('/:id', (req, res) => {
  const { id } = req.params;
  const updatedBook = req.body;
  books.splice(id - 1, 1);
  updatedBook.id = id;
  books.push(updatedBook);
  res.send(updatedBook);
});

router.delete('/:id', (req, res) => {
  const { id } = req.params;
  const deletedBook = books[id - 1];
  books.splice(id - 1, 1);
  res.send(deletedBook);
});

module.exports = router;
