import './Header.css'
import { Link } from 'react-router-dom'
import {
  AppBar,
  Box,
  Button,
  Toolbar,
  Typography,
  Container,
} from '@mui/material'

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

export default Header;
