import express from 'express';
import {addUser,getUsers} from '../controller/user-controller.js';
const router = express.Router();    //For express routing 


router.post('/add',addUser);  //route for add user data  
router.get('/',getUsers)  // route for get users data  

export default router;    
