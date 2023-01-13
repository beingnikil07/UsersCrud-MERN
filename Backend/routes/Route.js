import express from 'express';
import {addUser,getUsers,getUser,editUser} from '../controller/user-controller.js';
const router = express.Router();    //For express routing 


router.post('/add',addUser);  //route for add user data  
router.get('/',getUsers)  // route for get users data  
router.get('/:id',getUser);   //route for edit
router.post('/:id',editUser); //route to post edited data for the purpose of replace old data

export default router;    
