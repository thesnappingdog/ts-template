import express from 'express';
import bodyParser from 'body-parser';
import { logger } from '../logger';

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.send({
    message: 'Keep Express or switch to something else!'
  });
});

const PORT = 4000;
app.listen(PORT, () => {
  logger.log('info', { message: `App started on port ${PORT}!` });
});
