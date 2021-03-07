import { Request, Response, NextFunction } from 'express';
import { Quote } from '../models/quote.model';
import {
    returnRandomQuote, returnRandomQuoteFromBook
} from '../utilities/quotesUtils';

export const getRandomQuote = (request: Request, response: Response) => {
    const quote: Quote = returnRandomQuote();
    if (quote != null) {
        response.status(200).json({randomQuote: quote});
    } else {
        response.status(500);
    }
};

export const getRandomQuoteFromBook = (request: Request, response: Response) => {
    const bookTitle = request.body.title;
    const quote: Quote = returnRandomQuoteFromBook(bookTitle);
    if (quote != null) {
        response.status(200).json({randomQuote: quote});
    } else {
        response.status(500);
    }
}