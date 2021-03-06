import express from 'express';

const port = 3000;

// Define Express Server
const app = express();

app.get('/', (_, res) => {
  res.status(200).send()
})

// Listen to the server!!!
app.listen(port, () => {
    console.log("Yay I work")
})