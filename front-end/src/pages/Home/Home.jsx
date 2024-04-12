import "./Home.css"
import { Link } from "react-router-dom"

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Divider from '@mui/material/Divider';

const Home = () => {
  return (
    <Container sx={{ width: '100%', height: '100%' }}>
    <Card sx={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', backgroundColor: 'primary.bg' }}>
      <CardContent>
        <Typography variant="h1" color='white'>
          EVERYTHING A GAMER NEEDS WITH ONE CLICK
        </Typography>
        <Typography variant="h5" color="white">
          NebulaNova helps you to organize and follow every step you make on every game you play!
        </Typography>
        <Divider sx={{ height: '30px' }} />
        <CardActions sx={{ display: 'flex', justifyContent: 'center', width: '30%', backgroundColor: 'third.main' }}>
          <Link to='/signup'>
            <Button sx={{ width: '100%', height: '100%', color: 'white' }}>SIGN UP NOW</Button>
          </Link>
        </CardActions>
      </CardContent>
      <img
            src="https://media.discordapp.net/attachments/1214207531409473588/1227992805029187657/image.png?ex=662a6c6b&is=6617f76b&hm=2c12ddcc8f66656bf404875a99c55275d70af207abbfe6547b3bd62e68162347&=&format=webp&quality=lossless&width=960&height=598"
            className="games-image"
          />
    </Card>
    </Container>
  );
}

export default Home
