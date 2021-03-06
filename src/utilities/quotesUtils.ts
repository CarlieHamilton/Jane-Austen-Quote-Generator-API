import { Quote } from '../models/quote.model';
import * as data from '../data/quotes.json';

export const returnRandomQuote = () => {
    const quote: Quote = randomQuote(randomBook());
    return quote;
}

export const returnRandomQuoteFromBook = (bookTitle: string) => {
    const quote: Quote = randomQuote(bookTitle);
    return quote
}

// function that returns a random book title
const randomBook = () => {
    const bookTitles: string[] = Object.keys(data);
    return bookTitles[Math.floor(Math.random() * bookTitles.length)]
}

// function that returns a random quote from a specified book
const randomQuote = (bookTitle: string) => {
    const quotes: Quote[] = data[bookTitle];
    return quotes[Math.floor(Math.random() * quotes.length)];
}