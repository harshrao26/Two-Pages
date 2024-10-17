/* eslint-disable no-unused-vars */
import React from 'react';
import { AppBar, Toolbar, IconButton, Typography, Button } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

const Header = () => {
  return (
    <AppBar position="static" style={{ backgroundColor: 'transparent', boxShadow: 'none' }}>
      <Toolbar style={{ justifyContent: 'space-between' }}>
        <Typography variant="h6">SOHO CHINA</Typography>
        <div>
          <Button color="inherit">Map View</Button>
          <Button color="inherit">On Lease</Button>
          <Button color="inherit">Login</Button>
        </div>
        <IconButton edge="end" color="inherit">
          <MenuIcon />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
