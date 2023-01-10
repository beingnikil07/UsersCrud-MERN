import { FormControl, FormGroup, Input, InputLabel, Typography, styled, Button } from '@mui/material';
import React from 'react'

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
    return (
        <Container>
            <Typography variant='h4'>Contact Us</Typography>
            <FormControl>
                <InputLabel>Name</InputLabel>
                <Input />
            </FormControl>
            <FormControl>
                <InputLabel>Email</InputLabel>
                <Input />
            </FormControl>
            <FormControl>
                <InputLabel>Phone</InputLabel>
                <Input />
            </FormControl>
            <Button  variant="contained">Add User</Button>
        </Container>
    )
}
export default AddUser;