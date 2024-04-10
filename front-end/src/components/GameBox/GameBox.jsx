import './GameBox.css'
import PropTypes from 'prop-types'
import {
  Box,
  Card,
  CardMedia,
  CardContent
} from '@mui/material'

const GameBox = ({ game }) => {
  return (
    <Card sx={{ width: "100%", height: "130px" ,display: "flex", margin: "0 auto", backgroundColor:"secondary.main"}}>
      <CardMedia
        sx={{
          margin: "auto",
          marginLeft: "10px",
          height: 110,
          width: 110,          
          backgroundSize: "100% 100%",
          backgroundRepeat: "no-repeat",
        }}
        image={`https:${
          game.image &&
          game.image.replace("t_thumb", "t_cover_big")
        }`}          
      />
      <CardContent sx={{ width: "100%", color:"#fff", display: "flex", flexDirection: "column", justifyContent: 'space-between'}}>
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <p style={{ fontWeight: "bold" }}>{game.title} </p>
          <Box sx={{ display: "flex", gap: "10px" }}>
            <button className='platform-button'>{game.userGame.platform.toUpperCase()}</button>
            <button className='status-button'>{game.userGame.status.toUpperCase()}</button>
          </Box>
        </Box>
        <Box>
          <p className='genre-text'>{game.genre}</p>
        </Box>
      </CardContent>
    </Card>
  )
}

GameBox.propTypes = {
  game: PropTypes.object
}

export default GameBox