import PropTypes from 'prop-types'
import { useState } from 'react';
import { addUserGame } from '../../services/loginUserService'
import './GameCard.css'
import {
  Box,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  FormControl,
  IconButton,
  InputLabel,
  MenuItem,
  Select,
} from '@mui/material'
import AddIcon from '@mui/icons-material/Add';
import DoneIcon from '@mui/icons-material/Done';
import CloseIcon from '@mui/icons-material/Close';

const GameCard = ({ game, isList }) => {
  const [gameCollection, setGameCollection] = useState([])
  const [gameIn, setGameIn] = useState(false)
  const [addGame, setAddGame] = useState(false)
  const [status, setStatus] = useState('')
  const [platform, setPlatform] = useState('')

  const handleClickOpen = () => {
    setAddGame(true);
  }

  const handleClose = () => {
    setAddGame(false);
    setStatus('')
    setPlatform('')
  }

  const AddGameToCollection = async () => {
    try {
      const res = await addUserGame({ title: game.title, status, platform })
      setGameCollection(res)
      setGameIn(true)
    } catch (error) {
      if (error?.response === 501) {
        alert('The game is already in your collection')
      }
    }
  }

  return (
    <div className='cardGame'>
      <div className='cardimg-container' style={{backgroundImage: `url(https:${game.image.replace('t_thumb', 't_cover_big')})`, backgroundSize: 'contain', backgroundRepeat: 'no-repeat'}}>
      </div>
      <div className='gameData-container'>
        <p className='game-title'>{game.title}</p>
        { !isList && (gameIn ?
            <IconButton>
              <DoneIcon sx={{ color: '#2e7d32' }}/> 
            </IconButton>
          :
            <IconButton onClick={handleClickOpen} className='icconButton'>
              <AddIcon sx={{ color: '#2e7d32' }}/>
            </IconButton>)
        }
        <Dialog
          open={addGame}
          onClose={handleClose}
          PaperProps={{
            component: 'form',
            onSubmit: (event) => {
              event.preventDefault();
              AddGameToCollection()
              handleClose();
            }
          }}
        >
          <Box sx={{ display: "flex", backgroundColor: '#2A2D33', justifyContent: "space-between" }}>
            <DialogTitle sx={{ backgroundColor: '#2A2D33', color: '#fff' }}>Add to Collection </DialogTitle>
            <IconButton onClick={handleClose} sx={{ paddingRight: "15px" }}>
              <CloseIcon />
            </IconButton>
          </Box>
          <DialogContent>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Status</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={status}
                label="Age"
                onChange={(e) => setStatus(e.target.value)}
              >
                <MenuItem value={'playing'}>Add as Playing</MenuItem>
                <MenuItem value={'beaten'}>Add as Beaten</MenuItem>
                <MenuItem value={'completed'}>Add as Completed</MenuItem>
              </Select>
            </FormControl>
            <FormControl fullWidth sx={{ marginTop: "20px" }}>
              <InputLabel id="demo-simple-select-label">Platform</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={platform}
                label="Age"
                onChange={(e) => setPlatform(e.target.value)}
              >
                <MenuItem value={'PS5'}>Playstation 5</MenuItem>
                <MenuItem value={'XBOX'}>Xbox One</MenuItem>
                <MenuItem value={'PC'}>PC / Microsoft Window</MenuItem>
              </Select>
            </FormControl>
          </DialogContent>
          <DialogActions sx={{ backgroundColor: "#353941", display: "flex", justifyContent: "center" }}>
            <Button type="submit" sx={{ color: "#fff", fontWeight: "bold", fontSize: "16px" }}>Add</Button>
          </DialogActions>
        </Dialog>
      </div>
    </div>
  )
}

GameCard.propTypes = {
  game: PropTypes.object,
  isList: PropTypes.bool
}

export default GameCard