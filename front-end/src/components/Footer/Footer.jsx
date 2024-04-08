import './Footer.css'

import {
  Box,
  Container,
  Typography,
  Button,
  Grid
} from '@mui/material'

import InstagramIcon from '@mui/icons-material/Instagram'
import FacebookIcon from '@mui/icons-material/Facebook'
import XIcon from '@mui/icons-material/X'


const Footer = () => {
  const elements = [
    {
      header: 'Important Information',
      links: ['Privacy Policy', 'Cookie Policy', 'Legal Advice']
    },
    {
      header: 'Follow Our Social Networks',
      links: ['NebulaNova', 'NebulaNova', 'NebulaNova']
    }
]

  const generateFooterElements = () =>  {
    const footerElements = elements.map((column, i) => {
      return (
        <Grid item md={3} key={i}>
          <Box>
            <Button sx={{color: 'white', fontWeight: 'bold' }}>
              {column.header}
            </Button>
          </Box>
            {column.links.map((link, idx) => {
              return (
                <Box key={idx}>
                  <Button sx={{ color: 'white' }}>
                    {link}
                  </Button>
                </Box>
              )
            })}
        </Grid>
      )
    })
    return footerElements
  }

  return (
    <>
      <Box sx={{ display: 'flex', width: '100vw', backgroundColor: '#353941'}}>
        <Container sx={{ textAlign: 'center', padding: '15px 0'}}>
          <Grid container columnSpacing={2} sx={{ justifyContent: 'space-evenly' }}>
            {generateFooterElements()}
          </Grid>
        </Container>
      </Box>
      <Box sx={{ textAlign: 'center', backgroundColor: '#353941', paddingBottom: '15px' }}>
        <Typography sx={{ color: 'white' }}>
          © NebulaNova 2024 - All Rights Reserved
        </Typography>
      </Box>
    </>
  );
};

export default Footer;
