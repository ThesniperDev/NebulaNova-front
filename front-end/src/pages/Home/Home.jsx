import "./Home.css"
import { Link } from "react-router-dom"
import collectionImage from "../../assets/image.jpg"
import reviewImage from "../../assets/reviewImage.png"

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Divider from '@mui/material/Divider';

const Home = () => {
  return (
    <Container sx={{ width: '70%', margin: "60px auto" }}>
      <Card sx={{ display: 'flex', alignItems: 'center', backgroundColor: 'primary.bg' }}>
        <CardContent>
          <Typography variant="h1" color='white'>
            EVERYTHING A GAMER NEEDS IN OUR WEB
          </Typography>
          <Typography variant="h5" color="white" sx={{ marginTop: "20px" }}>
            NebulaNova helps you to organize and follow every step you make on every game you play!
          </Typography>
          <Divider sx={{ height: '30px' }} />
          <CardActions sx={{ display: 'flex', justifyContent: 'center', width: '30%', backgroundColor: 'third.main' }}>
            <Link to='/signup'>
              <Button sx={{ width: '200px', color: 'white', fontSize: "14px" }}>SIGN UP NOW</Button>
            </Link>
          </CardActions>
        </CardContent>
        <img
          src="https://media.discordapp.net/attachments/1214207531409473588/1227992805029187657/image.png?ex=662a6c6b&is=6617f76b&hm=2c12ddcc8f66656bf404875a99c55275d70af207abbfe6547b3bd62e68162347&=&format=webp&quality=lossless&width=960&height=598"
          className="games-image"
        />
      </Card>
      <Card sx={{ display: 'flex', alignItems: 'center', backgroundColor: 'primary.bg', marginTop: "90px" }}>
        <img
          src={collectionImage}
          className="games-image"
        />
        <CardContent sx={{ ml: "15px" }}>
          <Typography variant="h1" color='white'>
            ADD EVERYGAME YOU WANT TO YOUR COLLECTION WITH ONE CLICK
          </Typography>
          <Typography variant="h5" color="white" sx={{ marginTop: "20px" }}>
            NebulaNova lets you have an infinite collection of all the games that you have played or you want to play!
          </Typography>
        </CardContent>
      </Card>
      <Card sx={{ display: 'flex', alignItems: 'center', backgroundColor: 'primary.bg', marginTop: "60px" }}>
        <CardContent>
          <Typography variant="h1" color='white'>
            LET EVERYONE KNOW ABOUT YOUR FEEDBACK
          </Typography>
          <Typography variant="h5" color="white" sx={{ marginTop: "20px" }}>
            NebulaNova allows you to write a review about your games, and you will be able to rate them from 1 to 5 stars too!  
          </Typography>
        </CardContent>
        <img
          src={reviewImage}
          className="games-image"
        />
      </Card>
    </Container>
  );
}

export default Home
