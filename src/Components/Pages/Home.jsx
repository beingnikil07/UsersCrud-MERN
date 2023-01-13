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
import { getUsers, deleteUser } from "../Services/api.js";
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

  useEffect(() => {
    getAllUsers();
  }, []);

  const getAllUsers = async () => {
    let result = await getUsers();
    setUsers(result.data);
  };

  const deleteUserDetails = async (id) => {   //ye id wha se aa rhi hai jha maine call kiya tha isko
    await deleteUser(id);   //calling deleteUser api
    getAllUsers(); //delete hua refresh karne ke baad na dikhe isliye hum delete hote he sabhi ko dobara hatho hath get krr lenge 
  }

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
              <Button variant="contained" color="secondary" onClick={() => deleteUserDetails(user._id)}>Delete</Button>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </StyledTable>
  );
};
export default Home;
