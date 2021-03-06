import express from 'express';
import { getRandomQuote } from '../controllers/quotesController';

export const quotesRouter = express.Router();

quotesRouter.get('/random-quote', getRandomQuote);