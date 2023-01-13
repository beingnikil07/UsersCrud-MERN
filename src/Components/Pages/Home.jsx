import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  styled,
  Button
} from "@mui/material";
import { React, useEffect, useState } from "react";
import { getUsers } from "../Services/api.js";
import { Link } from "react-router-dom";

//Adding css 
const StyledTable = styled(Table)`
      width:80%;
      margin:50px auto 0px auto;
`;
const THead = styled(TableRow)`
  background:black;
  &>th{
    color:white;
    font-size:17px;
  }
`;

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
    <StyledTable>
      <TableHead>
        <THead>
          <TableCell>Id</TableCell>
          <TableCell>Name</TableCell>
          <TableCell>User Name</TableCell>
          <TableCell>Email</TableCell>
          <TableCell>Phone</TableCell>
          <TableCell></TableCell>    {/*Extra banayi kyuki ye jo extra space banegi idhar mai apne button rakhunga edit & delete */}
        </THead>
      </TableHead>
      <TableBody>
        {users.map((user) => (
          <TableRow>
            <TableCell>{user._id}</TableCell>
            <TableCell>{user.name}</TableCell>
            <TableCell>{user.username}</TableCell>
            <TableCell>{user.email}</TableCell>
            <TableCell>{user.phone}</TableCell>
            <TableCell>
              <Button variant="contained" style={{ marginRight: 10 }} component={Link} to={`/edit/${user._id}`}>Edit</Button>
              {/*Routing hum button ke sath nii krr sakte isliye humne component={Link } likh krr isko humne router component bna diya */}
              <Button variant="contained" color="secondary">Delete</Button>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </StyledTable>
  );
};
export default Home;
