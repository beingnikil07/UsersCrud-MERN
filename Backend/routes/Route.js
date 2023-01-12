import express from 'express';
import addUser from '../controller/user-controller.js';
const router = express.Router();    //For express routing 


router.post('/add',addUser);

export default router;    
