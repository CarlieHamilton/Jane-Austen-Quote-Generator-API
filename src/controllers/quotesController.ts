import { Request, Response, NextFunction } from 'express';
import { randomQuote } from '../utilities/quotesUtils';

export const getRandomQuote = (request: Request, response: Response) => {
    const quote = randomQuote();
    if (quote != null) {
        response.status(200).json({randomQuote: quote});
    } else {
        response.status(500);
    }
};
