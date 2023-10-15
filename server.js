require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');

const bookRouter = require('./routes/books');

const app = express();

const PORT = process.env.PORT;

const logger = (req, res, next) => {
  console.log(`Recieved ${req.method} on ${req.url}`);
  next();
};

app.use(express.json());
app.use(logger);

app.use('/api/books', bookRouter);

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    console.log('connected to Mongo DB');
  })
  .catch((error) => {
    console.log(`failed to connect DB: ${error}`);
  });

app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});

app.get('/', (req, res) => {
  res.send('Hello world');
});
