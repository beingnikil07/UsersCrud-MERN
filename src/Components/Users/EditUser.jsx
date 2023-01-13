import {
  FormControl,
  FormGroup,
  Input,
  InputLabel,
  Typography,
  styled,
  Button,
} from "@mui/material";
import { React, useEffect, useState } from "react";
import { editUser, getUser } from "../Services/api";
import { useNavigate, useParams } from "react-router";
const Container = styled(FormGroup)`
  width: 50%;
  font-family: "Poppins", sans-serif;
  margin: auto;
  & > div {
    margin-top: 25px;
  }
  & > h4 {
    font-family: "Poppins", sans-serif;
    font-weight: 600;
    text-align: center;
    margin-top: 10px;
  }
  & > button {
    margin-top: 30px;
    border-radius: 5px;
  }
  & > button:hover {
    background-color: green;
  }
`;

const EditUser = () => {
  const { id } = useParams(); 
  const navigate = useNavigate();

  const defaultUser = {
    name: "",
    username: "",
    email: "",
    phone: "",
  };
  const [user, setUser] = useState(defaultUser);
  useEffect(() => {
    loadUserDetails();
  }, []);

  const loadUserDetails = async () => {
    const result = await getUser(id);
    setUser(result.data);
  };

  const onValueChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const EditUserDetails = async () => {
    await editUser(user,id);   
    navigate("/");
  };
  return (
    <Container>
      <Typography variant="h4">Update User</Typography>
      <FormControl>
        <InputLabel>Name</InputLabel>
        <Input
          onChange={(e) => {
            onValueChange(e);
          }}
          name="name"
          value={user.name}
        />
      </FormControl>
      <FormControl>
        <InputLabel>Username</InputLabel>
        <Input
          onChange={(e) => {
            onValueChange(e);
          }}
          name="username"
          value={user.username}
        />
      </FormControl>
      <FormControl>
        <InputLabel>Email</InputLabel>
        <Input
          onChange={(e) => {
            onValueChange(e);
          }}
          name="email"
          value={user.email}
        />
      </FormControl>
      <FormControl>
        <InputLabel>Phone</InputLabel>
        <Input
          onChange={(e) => {
            onValueChange(e);
          }}
          name="phone"
          value={user.phone}
        />
      </FormControl>
      <Button color="warning" variant="contained" onClick={EditUserDetails}>
        Update User
      </Button>
    </Container>
  );
};
export default EditUser;
