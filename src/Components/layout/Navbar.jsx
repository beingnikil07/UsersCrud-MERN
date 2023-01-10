import React from 'react';
import { AppBar, Toolbar, styled } from '@mui/material';
import { NavLink } from 'react-router-dom';
const Header = styled(AppBar)`     // AppBar ko styled kiya hai to hum isko avv svv jagah Header ke naam se janenge.
    background:#111111;
`;
const Tabs = styled(NavLink)`    //Don't wrap NavLink into quotation like 'NavLink'
     font-size:20px;
     margin-right:20px;
     color:inherit;
     text-decoration:none;
`;

const Navbar = () => {
    return (
        <div>
            <Header position='static'>
                <Toolbar>
                    <Tabs to="/" >Users</Tabs>
                    <Tabs to="/" >Home</Tabs>
                    <Tabs to="/users/add" >Add User</Tabs>
                    <Tabs to="/contact" >Contact</Tabs>
                    <Tabs to="/about" >About</Tabs>
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