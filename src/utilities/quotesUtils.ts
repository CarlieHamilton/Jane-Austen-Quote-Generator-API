import { Quote } from '../models/quote.model';
import * as data from '../data/quotes.json';

export const returnRandomQuote = () => {
    const quote = randomQuote('Pride and Prejudice');
    return quote;
}

// function that returns a random bookTitle

// function that returns a random quote from that book
const randomQuote = (bookTitle: string) => {
    const quotes: string[] = data[bookTitle];
    return quotes[Math.floor(Math.random() * quotes.length)];
}