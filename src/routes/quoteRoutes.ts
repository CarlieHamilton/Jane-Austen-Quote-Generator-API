import express from 'express';
import {
    getRandomQuote, getRandomQuoteFromBook
} from '../controllers/quotesController';

export const quotesRouter = express.Router();

quotesRouter.get('/random-quote', getRandomQuote);
quotesRouter.post('/random-quote-from-book', getRandomQuoteFromBook);