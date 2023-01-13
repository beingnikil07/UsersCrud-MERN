import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@mui/material";
import { React, useEffect, useState } from "react";
import { getUsers } from "../Services/api.js";
const Home = () => {
  const [users, setUsers] = useState([]);
  //initail value ek array dii kyuki api ka data ek array ke format mai aaya hai
  useEffect(() => {
    getAllUsers();
  }, []);

  //recieving data from api
  const getAllUsers = async () => {
    //storing api data in a variable
    let result = await getUsers();
    //console.log(result.data);
    // setting all data in state
    setUsers(result.data);
  };
  return (
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
        {users.map((user) => (
          <TableRow>
            <TableCell>{user._id}</TableCell>
            <TableCell>{user.name}</TableCell>
            <TableCell>{user.username}</TableCell>
            <TableCell>{user.email}</TableCell>
            <TableCell>{user.phone}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};
export default Home;
