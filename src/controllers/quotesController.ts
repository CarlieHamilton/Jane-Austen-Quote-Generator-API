import { Request, Response, NextFunction } from 'express';
import { returnRandomQuote } from '../utilities/quotesUtils';

export const getRandomQuote = (request: Request, response: Response) => {
    const quote = returnRandomQuote();
    if (quote != null) {
        response.status(200).json({randomQuote: quote});
    } else {
        response.status(500);
    }
};
