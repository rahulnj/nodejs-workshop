const express = require('express');
const router = express.Router();

const Book = require('../models/book');

router.get('/', async (req, res) => {
  const books = await Book.find();
  res.send(books);
});

router.get('/:id', async (req, res) => {
  const { id } = req.params;
  const book = await Book.findById(id);
  res.send(book);
});

router.post('/', async (req, res) => {
  const newBook = req.body;
  const dbBook = await Book.create(newBook);
  res.send(dbBook);
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
