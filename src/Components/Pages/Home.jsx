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
const TABLECELL = styled(TableCell)`
    font-size:17px;
`

const Home = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getAllUsers();
  }, []);

  const getAllUsers = async () => {
    let result = await getUsers();
    setUsers(result.data);
  };

  const deleteUserDetails = async (id) => {
    await deleteUser(id);
    getAllUsers();
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
          <TableCell></TableCell>
        </THead>
      </TableHead>
      <TableBody>
        {users.map((user) => (
          <TableRow>
            <TABLECELL>{user._id}</TABLECELL>
            <TABLECELL>{user.name}</TABLECELL>
            <TABLECELL>{user.username}</TABLECELL>
            <TABLECELL>{user.email}</TABLECELL>
            <TABLECELL>{user.phone}</TABLECELL>
            <TABLECELL>
              <Button variant="contained" style={{ marginRight: 10 }} component={Link} to={`/edit/${user._id}`}>Edit</Button>

              <Button variant="contained" color="secondary" onClick={() => deleteUserDetails(user._id)}>Delete</Button>
            </TABLECELL>
          </TableRow>
        ))}
      </TableBody>
    </StyledTable>
  );
};
export default Home;
