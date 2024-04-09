/* import './Header.css'

import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Button, Card, CardContent, CardActions, Menu, MenuItem, Container, Box, Link } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import GamesIcon from '@mui/icons-material/Games';
import ReviewsIcon from '@mui/icons-material/Reviews';
import LoginIcon from '@mui/icons-material/Login';
import AddIcon from '@mui/icons-material/Add';

  const settings = ['Log In', 'Sign Up'];
  const pages = ['Home', 'Games', 'Reviews']

const Header = () => {
  return (
    <AppBar position="static">
      
      <Container sx={{ padding: '15px 0', width: '100%', margin: 0, minWidth: "100vw" }}>
        <Toolbar sx={{ width: '100%', display: 'flex' }}>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
          <img src='https://media.discordapp.net/attachments/1214207531409473588/1226834656549408778/logooo.png?ex=662635cf&is=6613c0cf&hm=7b93a80e55d73bf74f809479bdfab05ed5979823cf11c4adc440dbba830fb060&=&format=webp&quality=lossless' className='img'/>
          <Typography variant='h1'>
            NebulaNova
          </Typography>
        </Box>
        <Box sx={{ flexGrow: 1, display: 'flex', justifyContent: 'center' }}>
            {pages.map((page) => (
              <Link key={page} to={page.toLocaleLowerCase()}>
                <Button
                  sx={{ my: 2, color: 'white', display: 'block' }}
                >
                  {page}
                </Button>
              </Link>
            ))}
          </Box>
          <Box sx={{ flexGrow: 0, display: 'flex', justifyContent: 'flex-end' }}>
            {settings.map((setting) => (
              <Link key={setting} to={setting.toLowerCase().split(' ').join('')}>
                <Button
                sx={{ my: 2, color: 'white', display: 'block' }}
                >
                  {setting}
                </Button>
              </Link>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};


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
          <MenuItem onClick={handleClose} sx={{ gap: '3px' }}><HomeIcon fontSize='small'/>Home</MenuItem>
          <MenuItem onClick={handleClose} sx={{ gap: '3px' }}><GamesIcon fontSize='small'/>Games</MenuItem>
          <MenuItem onClick={handleClose} sx={{ gap: '3px' }}><ReviewsIcon fontSize='small'/>Reviews</MenuItem>
          <MenuItem onClick={handleClose} sx={{ gap: '3px' }}><LoginIcon fontSize='small'/>Log In</MenuItem>
          <MenuItem onClick={handleClose} sx={{ gap: '3px' }}><AddIcon fontSize='small'/>Sign Up</MenuItem>
        </Menu>
        <Typography variant="h1" sx={{ flexGrow: 0.97, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '5px', padding: '5px 0' }}>
          <img src='https://media.discordapp.net/attachments/1214207531409473588/1226834656549408778/logooo.png?ex=662635cf&is=6613c0cf&hm=7b93a80e55d73bf74f809479bdfab05ed5979823cf11c4adc440dbba830fb060&=&format=webp&quality=lossless' className='img'/>
          NebulaNova
        </Typography>
      </Toolbar>
    </AppBar>
  );
}

export default Header */

import './Header.css'

import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';

const pages = ['Home', 'Games', 'Reviews'];
const settings = ['Log In', 'Sign Up'];

function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar position="static">
      <Container maxWidth="100vw" sx={{ marginLeft: 0, marginRight: 0 }}>
        <Toolbar disableGutters>
          <Typography
            variant="h1"
            noWrap
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              color: 'inherit',
              textDecoration: 'none',
              padding: '5px 0',
              alignItems: 'center',
              gap: '5px'
            }}
          >
            <img src='https://media.discordapp.net/attachments/1214207531409473588/1226834656549408778/logooo.png?ex=662635cf&is=6613c0cf&hm=7b93a80e55d73bf74f809479bdfab05ed5979823cf11c4adc440dbba830fb060&=&format=webp&quality=lossless' className='img'/>
            NebulaNova
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center" sx={{ display: 'flex', flexGrow: 1 }}>{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Typography
            variant="h1"
            noWrap
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontWeight: 700,
              color: 'inherit',
              textDecoration: 'none',
              padding: '5px 0',
              alignItems: 'center',
              gap: '5px'
            }}
          >
            <img src='https://media.discordapp.net/attachments/1214207531409473588/1226834656549408778/logooo.png?ex=662635cf&is=6613c0cf&hm=7b93a80e55d73bf74f809479bdfab05ed5979823cf11c4adc440dbba830fb060&=&format=webp&quality=lossless' className='img'/>
            NebulaNova
          </Typography>
          <Box sx={{ flexGrow: 1, justifyContent: 'center', display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <Button variant='h1'
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                {page}
              </Button>
            ))}
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <AccountCircleIcon fontSize='large' sx={{ color: 'white' }}/>
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;
