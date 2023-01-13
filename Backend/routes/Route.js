import express from 'express';
import { addUser, getUsers, getUser, editUser, deleteUser } from '../controller/user-controller.js';
const router = express.Router();    //For express routing 


router.post('/add', addUser);  //route for add user data  
router.get('/', getUsers)  // route for get users data  
router.get('/:id', getUser);   //route for edit
router.put('/:id', editUser); //route to post edited data for the purpose of replace old data
router.delete('/:id', deleteUser); //route to delete a user

export default router;    
