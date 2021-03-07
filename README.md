# Jane Austen Quote Generator API

This API generates a random Jane Austen quote.

Deployed to: https://jane-austen-quote-api.herokuapp.com/

## Routes

```bash
GET /random-quote
```

- Returns a random Jane Austen quote

```bash
GET /random-quote-from-book
Content-Type: application/json
{
    "title": "Book Title Here"
}
```

- Returns a random quote, given a book title in the request body.

## How to use this repository

- Clone or fork this repository to your local machine.
- Install the dependencies with `npm i` -- make sure you are in the route directory.
- To run the server in development mode, run the command `npm run dev`
- You should now be able to call your server locally. The local default port used is `3000`