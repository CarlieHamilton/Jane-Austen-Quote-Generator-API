import { Quote } from '../models/quote.model';
import * as quotes from '../data/quotes.json';

export const randomQuote = () => {
    return quotes['Pride and Prejudice'][0];
}