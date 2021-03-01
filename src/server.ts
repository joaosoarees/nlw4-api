import 'reflect-metadata';
import express from 'express';
import './database';

const app = express();

app.listen(3003, () =>
  console.log('🔥 Server started at htpp://localhost:3003'),
);
