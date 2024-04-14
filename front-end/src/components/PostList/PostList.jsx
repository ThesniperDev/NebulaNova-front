import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import "./PostList.css"
import PropTypes from 'prop-types'
import {
  Box,
  Card,
  CardMedia,
  IconButton
} from "@mui/material"
import { getAllGamesList, deleteList } from "../../services/loginUserService"
import DeleteIcon from '@mui/icons-material/Delete';

const PostList = ({ list }) => {
  const [gamesList, setGamesList] = useState([])

  const navigate = useNavigate()

  const handleGamesList = async () => {
    const res = await getAllGamesList(list.id)
    setGamesList(res)
  }

  const DeleteList = async () => {
    const res = await deleteList(list.id)
    console.log(res)
    navigate('/user/lists')
  }

  useEffect(() => {
    handleGamesList()
  },[])

  return (
    <Box sx={{ cursor: "pointer" }}>
      {gamesList.length > 0 ?
        <Card sx={{ display: "flex", flexWrap: "nowrap", backgroundColor: "#353941", width: "633.6px", height: "max-content" }}>
          {
            gamesList && gamesList.slice(0, 3).map((gameList, idx) => {
                return(
                  <CardMedia
                    key={idx}
                    sx={{
                      width: 211.2,
                      height: 281.6,
                      backgroundSize: "contain",
                      backgroundRepeat: "no-repeat",
                    }}
                    image={`https:${
                      gameList.image.replace("t_thumb", "t_cover_big")
                    }`}
                  />
                )
            })
          }
        </Card>
        :
        <Card sx={{ width:"633.6px", height: "281.6px", backgroundColor: "#353941" }}>
        </Card>
      }
      <Box sx={{ display: 'flex', width: "100%", justifyContent: "space-between" }}>
        <p className="title-list">{list.title}</p>
        <IconButton onClick={DeleteList}>
          <DeleteIcon className='delete-list' sx={{ color: "rgba(255,255,255, 0.7)" }}/>
        </IconButton>
      </Box>
    </Box>
  )
}

PostList.propTypes = {
  list: PropTypes.object
}

export default PostList