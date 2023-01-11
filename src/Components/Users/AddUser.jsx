import { FormControl, FormGroup, Input, InputLabel, Typography, styled, Button } from '@mui/material';
import { React, useState } from 'react'


const Container = styled(FormGroup)`
    width:50%;
    font-family: 'Poppins', sans-serif;
    margin:auto;
    &>div{
        margin-top:25px;
    }
    &>h4{
        font-family: 'Poppins', sans-serif;
        font-weight:600;
        text-align:center;
        margin-top:10px
    }
    &>button{
        margin-top:30px;
        border-radius:5px;
    }
    &>button:hover{
        background-color:green;
    }
`;

const AddUser = () => {
    // default values of user 
    const defaultUser = {
        name: "",
        username: "",
        email: "",
        phone: ""
    }
    const [user, setUser] = useState(defaultUser);
    const onValueChange = (e) => {
        //console.log(e.target.name,e.target.value);    
        // setUser({...user,e.target.name:e.target.value}); Don't write like this becz we all know that object
        //is a pair of key and value .Whenever key and value are same we have write key in a square bracket 
        setUser({ ...user, [e.target.name]: e.target.value })
        //spread ...user isliye kiya agar nhi lagate to ye override krr deta, if you wanna try what happens when we not gives spread operator
        // just remove ...user and print console.log(user) to show the effect on console live
        //console.log(user);   // yes ,working perfectly
    }
    return (
        <Container>
            <Typography variant='h4'>Add User</Typography>
            <FormControl>
                <InputLabel>Name</InputLabel>
                <Input onChange={(e) => { onValueChange(e) }} name="name" />
            </FormControl>
            <FormControl>
                <InputLabel>Username</InputLabel>
                <Input onChange={(e) => { onValueChange(e) }} name="username" />
            </FormControl>
            <FormControl>
                <InputLabel>Email</InputLabel>
                <Input onChange={(e) => { onValueChange(e) }} name="email" />
            </FormControl>
            <FormControl>
                <InputLabel>Phone</InputLabel>
                <Input onChange={(e) => { onValueChange(e) }} name="phone" />
            </FormControl>
            <Button color='secondary' variant="contained">Add User</Button>
        </Container>
    )
}
export default AddUser;


