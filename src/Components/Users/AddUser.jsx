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
            <Typography variant='h4'>Add User</Typography>
            <FormControl>
                <InputLabel>Name</InputLabel>
                <Input />
            </FormControl>
            <FormControl>
                <InputLabel>Username</InputLabel>
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
            <Button color='secondary' variant="contained">Add User</Button>
        </Container>
    )
}
export default AddUser;

/**
 * Actual mai ye formcontrol jo hai ye ek div he hai , kaise pta kre ye div hai to simple
 * aap browser mai inspect karke dekh lo 
 * Hum parent mean container se he uske childs ko access krr sakte hai &>div kuch aaise karke
 * Ya aap child ko alag properties lga lo it's totally up to you
 * Avv typography bhi ek h4 tag he hai insect mai dekh lo 
 */
