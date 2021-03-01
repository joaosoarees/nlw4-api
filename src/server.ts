import 'reflect-metadata';
import express from 'express';
import './database';
import { router } from './routes';

const app = express();

app.use(express.json());
app.use(router);

app.listen(3003, () =>
  console.log('🔥 Server started at htpp://localhost:3003'),
);
