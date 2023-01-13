import { Table,TableBody,TableCell, TableHead, TableRow } from '@mui/material';
import React from 'react'
const Home=()=>{
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