import express from 'express';
import cors from 'cors';

const port = process.env.PORT || 8000;

// Define Express Server
const app = express();

// Import Routes
import { quotesRouter } from './routes/quoteRoutes';

app.use(cors());
app.use(express.json());

// Define routes
app.use('/', quotesRouter);

// Listen to the server!!!
app.listen(port, () => {
    console.log("Yay I work")
})