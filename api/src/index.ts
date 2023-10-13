import express from 'express';
import router from './Routes';
import dotenv from 'dotenv';

dotenv.config();

const port = process.env.PORT 

const app = express();

app.use(router);

app.listen(port, () => {
  console.log(`Server started at http://localhost:${port}`);
});