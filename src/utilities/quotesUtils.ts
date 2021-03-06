import { Quote } from '../models/quote.model';
import * as data from '../data/quotes.json';

export const returnRandomQuote = () => {
    const quote = randomQuote(randomBook());
    return quote;
}

// function that returns a random book title
const randomBook = () => {
    const bookTitles = Object.keys(data);
    return bookTitles[Math.floor(Math.random() * bookTitles.length)]
}

// function that returns a random quote from a specified book
const randomQuote = (bookTitle: string) => {
    const quotes: string[] = data[bookTitle];
    return quotes[Math.floor(Math.random() * quotes.length)];
}