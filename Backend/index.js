import express from "express";
import Connection from "./database/db.js";
import dotenv from 'dotenv';
import Routes from './routes/Route.js';   //Importing express router in server file
import cors from 'cors';

const app = express();

dotenv.config();   //doing configuration

app.use(cors());
app.use('/', Routes);
/*  '/' ek default endpoint hai routes ka aur sabhi routes mai by default ye add hoga like 
     /add ,/edit,/delete,/view kuch aaise aur aap /users default endpoint dete t kuch aaise 
     hota phir /users/add,/users/edit....
*/


const PORT = 5000;

// Assigning values from .env file 
const username = process.env.DB_USERNAME;
const password = process.env.DB_PASSWORD;

Connection(username, password);  //Taking values as a parameter  
app.listen(PORT, () => {
    console.log(`server running at ${PORT}`);
}); 