import React from 'react';
import { AppBar, Toolbar, styled } from '@mui/material';
const Header = styled(AppBar)`     // AppBar ko styled kiya hai to hum isko avv svv jagah Header ke naam se janenge.
    background:#111111;
`;
const Tabs=styled('p')`
     font-size:20px;
     margin-right:20px;
    
`;

const Navbar = () => {
    return (
        <div>
            <Header position='static'>
                <Toolbar>
                  <Tabs>Users</Tabs>
                  <Tabs>Home</Tabs>
                  <Tabs>Add User</Tabs>                  
                </Toolbar>
            </Header>
        </div>
    )
}
export default Navbar;



/**
 * AppBar will give you a header with a default color 
 *
 */