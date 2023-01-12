import express from "express";
import Connection from "./database/db.js";
import dotenv from "dotenv";
import Routes from "./routes/Route.js";
import cors from "cors";
import bodyParser from "body-parser";
/* Express body-parser is an npm module used to process data sent in an HTTP request body.
    It provides four express middleware for parsing JSON, Text, URL-encoded, and raw data sets over an HTTP request body.
   Before the target controller receives an incoming request, these middleware routines handle it
 */
const app = express();

dotenv.config();

app.use(cors()); // This will fix the issue of cors

app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true })); // To url encode
app.use("/", Routes);

const PORT = 5000;

// Assigning values from .env file
const username = process.env.DB_USERNAME;
const password = process.env.DB_PASSWORD;

Connection(username, password);
app.listen(PORT, () => {
  console.log(`server running at ${PORT}`);
});
