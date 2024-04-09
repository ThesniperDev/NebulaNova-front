import './Header.css'

import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Button, Card, CardContent, CardActions, Menu, MenuItem } from '@mui/material';

const Header = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar position="static" sx={{ display: 'flex' }}>
      <Toolbar sx={{ display: 'flex' }}>
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ display: 'flex' }}
          aria-controls="simple-menu"
          aria-haspopup="true"
          onClick={handleClick}
        >
          <MenuIcon />
        </IconButton>
        <Menu
          id="simple-menu"
          anchorEl={anchorEl}
          keepMounted
          open={Boolean(anchorEl)}
          onClose={handleClose}
        >
          <MenuItem onClick={handleClose}>Home</MenuItem>
          <MenuItem onClick={handleClose}>Games</MenuItem>
          <MenuItem onClick={handleClose}>Reviews</MenuItem>
          <MenuItem onClick={handleClose}>Log In</MenuItem>
          <MenuItem onClick={handleClose}>Sign Up</MenuItem>
        </Menu>
        <Typography variant="h1" sx={{ flexGrow: 0.97, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '5px', padding: '5px 0' }}>
          <img src='https://media.discordapp.net/attachments/1214207531409473588/1226834656549408778/logooo.png?ex=662635cf&is=6613c0cf&hm=7b93a80e55d73bf74f809479bdfab05ed5979823cf11c4adc440dbba830fb060&=&format=webp&quality=lossless' className='img'/>
          NebulaNova
        </Typography>
      </Toolbar>
    </AppBar>
  );
}


export default Header