import express from "express";
import Connection from "./database/db.js";
import dotenv from 'dotenv';
const app = express();
const PORT = 5000;

dotenv.config();   //doing configuration
// Assigning values from .env file 
const username = process.env.DB_USERNAME;
const password = process.env.DB_PASSWORD;

Connection(username, password);  //Taking values as a parameter  
app.listen(PORT, () => {
    console.log(`server running at ${PORT}`);
});