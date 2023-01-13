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
import { addUser, getUser } from "../Services/api";
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
  const { id } = useParams(); //useParams ek object hota hai jisko destructure karke hum id nikal sakte hai URL se

  useEffect(() => {
    loadUserDetails();
  }, []);

  const loadUserDetails = async () => {
    const result = await getUser(id);
  };

  const defaultUser = {
    name: "",
    username: "",
    email: "",
    phone: "",
  };
  const [user, setUser] = useState(defaultUser);
  const navigate = useNavigate();

  const onValueChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const addUserDetails = async () => {
    await addUser(user);
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
        />
      </FormControl>
      <FormControl>
        <InputLabel>Username</InputLabel>
        <Input
          onChange={(e) => {
            onValueChange(e);
          }}
          name="username"
        />
      </FormControl>
      <FormControl>
        <InputLabel>Email</InputLabel>
        <Input
          onChange={(e) => {
            onValueChange(e);
          }}
          name="email"
        />
      </FormControl>
      <FormControl>
        <InputLabel>Phone</InputLabel>
        <Input
          onChange={(e) => {
            onValueChange(e);
          }}
          name="phone"
        />
      </FormControl>
      <Button color="secondary" variant="contained" onClick={addUserDetails}>
        Add User
      </Button>
    </Container>
  );
};
export default EditUser;
