import { Quote } from '../models/quote.model';
import * as quotes from '../data/quotes.json';

export const randomQuote = () => {
    console.log("I'm a random quote");
    return quotes['Pride and Prejudice'][0];
}