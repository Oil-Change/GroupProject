require('dotenv').config();

const express = require('express');
const app = express();

const session = require('express-session');

const { SERVER_PORT, SESSION_SECRET, CONNECTION_STRING } = process.env;
const PORT = SERVER_PORT;

app.use(express.json());

app.listen(PORT, () => console.log(`Listening on Port ${PORT}`));