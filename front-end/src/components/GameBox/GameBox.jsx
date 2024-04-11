import { useState } from "react";
import "./GameBox.css";
import { updateUserGame } from "../../services/loginUserService";
import PropTypes from "prop-types";
import { Box, Button, Card, CardMedia, CardContent, Dialog, DialogTitle, DialogContent, DialogActions, FormControl, IconButton, InputLabel, MenuItem, Menu, Select } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import AddIcon from '@mui/icons-material/Add';
import RateReviewIcon from '@mui/icons-material/RateReview';
import RemoveIcon from '@mui/icons-material/Remove';


const options = [
  [<AddIcon />, 'Add to list'],
  [<RateReviewIcon />, 'Add a Review'],
  [<RemoveIcon />, 'Delete from collection']
]

const GameBox = ({ game }) => {
  const [gameUpdate, setGameUpdate] = useState([]);
  const [editGame, setEditGame] = useState(false);
  const [status, setStatus] = useState("");
  const [platform, setPlatform] = useState("");
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);



  const handleClickOpen = () => {
    setEditGame(true);
  };

  const handleClose = () => {
    setEditGame(false);
    setStatus("");
    setPlatform("");
  };

  const AddGameToCollection = async () => {
    try {
      const res = await updateUserGame({ gameId: game.id, gamedata: { status, platform } });
      setGameUpdate(res);
    } catch (error) {
      if (error?.response === 501) {
        alert("The game is already in your collection");
      }
    }
  };

  const handleClickIcon = (event) => {
    setAnchorEl(event.currentTarget)
  }

  const handleCloseIcon = () => {
    setAnchorEl(null)
  }

  return (
    <Card sx={{ width: "100%", height: "130px", display: "flex", margin: "0 auto", backgroundColor: "secondary.main" }}>
      <CardMedia
        sx={{
          margin: "auto",
          marginLeft: "10px",
          height: 110,
          width: 110,
          backgroundSize: "100% 100%",
          backgroundRepeat: "no-repeat",
        }}
        image={`https:${game.image && game.image.replace("t_thumb", "t_cover_big")}`}
      />
      <CardContent sx={{ width: "100%", color: "#fff", display: "flex", flexDirection: "column", justifyContent: "space-between", margin: "auto", gap: "25px" }}>
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <p style={{ fontWeight: "bold" }}>{game.title} </p>
          <Box sx={{ display: "flex", gap: "10px" }}>
            <button className="platform-button" onClick={handleClickOpen}>
              {game.userGame.platform.toUpperCase()}
            </button>
            <button className="status-button" onClick={handleClickOpen}>
              {game.userGame.status.toUpperCase()}
            </button>
            <Dialog
              open={editGame}
              onClose={handleClose}
              PaperProps={{
                component: "form",
                onSubmit: () => {
                  AddGameToCollection();
                  handleClose();
                },
              }}
            >
              <Box sx={{ display: "flex", backgroundColor: "#2A2D33", justifyContent: "space-between" }}>
                <DialogTitle sx={{ backgroundColor: "#2A2D33", color: "#fff" }}>Add to Collection </DialogTitle>
                <IconButton onClick={handleClose} sx={{ paddingRight: "15px" }}>
                  <CloseIcon />
                </IconButton>
              </Box>
              <DialogContent>
                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label">Status</InputLabel>
                  <Select labelId="demo-simple-select-label" id="demo-simple-select" value={status} label="Age" onChange={(e) => setStatus(e.target.value)}>
                    <MenuItem value={"playing"}>Add as Playing</MenuItem>
                    <MenuItem value={"beaten"}>Add as Beaten</MenuItem>
                    <MenuItem value={"completed"}>Add as Completed</MenuItem>
                  </Select>
                </FormControl>
                <FormControl fullWidth sx={{ marginTop: "20px" }}>
                  <InputLabel id="demo-simple-select-label">Platform</InputLabel>
                  <Select labelId="demo-simple-select-label" id="demo-simple-select" value={platform} label="Age" onChange={(e) => setPlatform(e.target.value)}>
                    <MenuItem value={"PS5"}>Playstation 5</MenuItem>
                    <MenuItem value={"XBOX"}>Xbox One</MenuItem>
                    <MenuItem value={"PC"}>PC / Microsoft Window</MenuItem>
                  </Select>
                </FormControl>
              </DialogContent>
              <DialogActions sx={{ backgroundColor: "#353941", display: "flex", justifyContent: "center" }}>
                <Button type="submit" sx={{ color: "#fff", fontWeight: "bold", fontSize: "16px" }}>
                  Add
                </Button>
              </DialogActions>
            </Dialog>
          </Box>
        </Box>
        <Box sx={{ width: "100%", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <Box>
            <p className="genre-text">{game.genre}</p>
          </Box>
          <Box>
          <IconButton
            aria-label="more"
            id="long-button"
            aria-controls={open ? 'long-menu' : undefined}
            aria-expanded={open ? 'true' : undefined}
            aria-haspopup="true"
            onClick={handleClickIcon}
          >
            <MoreVertIcon />
          </IconButton>
        <Menu
        sx={
          { "& .MuiMenu-paper": 
            { backgroundColor: "#2A2D33", }, 
          }
        }
          MenuListProps={{
            'aria-labelledby': 'long-button',
          }}
          anchorEl={anchorEl}
          open={open}
          onClose={handleCloseIcon}
        >
          {options.map((option) => (
            <MenuItem className="menu-items" key={option} onClick={handleCloseIcon} sx={{ backgroundColor: "#2A2D33", color: "#fff", gap: '5px', height: '100%' }}>
              {option}
            </MenuItem>
          ))}
        </Menu>
        </Box>
        </Box>
      </CardContent>
    </Card>
  );
};

GameBox.propTypes = {
  game: PropTypes.object,
};

export default GameBox;
