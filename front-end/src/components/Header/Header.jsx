import './Header.css'

import { useState } from 'react'

import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Menu as CardMenu,
  MenuItem
} from '@mui/material'

import { Menu as MenuIcon } from '@mui/icons-material'

const Header = () => {
  const [anchorEl, setAnchorEl] = useState(null)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget)
    setIsMenuOpen(true)
  }
  const handleClose = () => {
    setAnchorEl(null)
    setIsMenuOpen(false)
  }

  return (
    <AppBar position="static" color="secondary">
      <Toolbar variant="dense">
        <IconButton
          onClick={handleClick}
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 10 }}
        >
          <MenuIcon />
        </IconButton>
        <CardMenu open={isMenuOpen} anchorEl={anchorEl} onClose={handleClose}>
          <MenuItem>Home</MenuItem>
          <MenuItem>Games</MenuItem>
          <MenuItem>Reviews</MenuItem>
          <MenuItem>Log In</MenuItem>
          <MenuItem>Sign Up</MenuItem>
        </CardMenu>
        <Typography variant='h1' color='white' component='div' sx={{ display: 'flex', alignItems: 'center', gap: '5px', fontWeight: 'bold' }}>
        <img src='https://media.discordapp.net/attachments/1214207531409473588/1226834656549408778/logooo.png?ex=662635cf&is=6613c0cf&hm=7b93a80e55d73bf74f809479bdfab05ed5979823cf11c4adc440dbba830fb060&=&format=webp&quality=lossless' className='img'/>
          NebulaNova
        </Typography>
      </Toolbar>
    </AppBar>
  )
}

export default Header