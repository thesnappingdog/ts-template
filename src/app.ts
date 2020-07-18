import express from 'express';
import bodyParser from 'body-parser';

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.send('TS App is Running');
});

const PORT = 4000;
app.listen(PORT, () => {
  console.log(`server is running on PORT ${PORT}`);
});
