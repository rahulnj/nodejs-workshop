require('dotenv').config();
const express = require('express');

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

app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});

app.get('/', (req, res) => {
  res.send('Hello world');
});
