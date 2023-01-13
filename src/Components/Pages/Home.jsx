import { Table,TableBody,TableCell, TableHead, TableRow } from '@mui/material';
import {React,useEffect} from 'react'
import {getUsers} from '../Services/api.js';
const Home=()=>{
useEffect(()=>{
    getAllUsers(); 
},[]);

//recieving data from api  
const getAllUsers=async()=>{
    await getUsers();
}
    return(
        <Table>
            <TableHead>
                <TableRow>
                    <TableCell>Id</TableCell>
                    <TableCell>Name</TableCell>
                    <TableCell>User Name</TableCell>
                    <TableCell>Email</TableCell>
                    <TableCell>Phone</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>

            </TableBody>
        </Table>
    )
}
export default Home;