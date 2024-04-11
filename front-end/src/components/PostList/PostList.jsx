import { useState, useEffect } from 'react'
import "./PostList.css"
import PropTypes from 'prop-types'
import {
  Box,
  Card,
  CardMedia
} from "@mui/material"
import { getAllGamesList } from "../../services/loginUserService"

const PostList = ({ list }) => {
  const [gamesList, setGamesList] = useState([])

  const handleGamesList = async () => {
    const res = await getAllGamesList(list.id)
    setGamesList(res)
  }

  useEffect(() => {
    handleGamesList()
  },[])

  return (
    <Box sx={{ cursor: "pointer" }}>
      {gamesList.length > 0 ?
        <Card sx={{ display: "flex", backgroundColor: "#353941"}}>
          {
            gamesList && gamesList.map((gameList, idx) => {
              if (idx < 2) {
                return(
                  <CardMedia
                    key={idx}
                    sx={{
                      height: 352,
                      width: 264,
                      backgroundSize: "contain",
                      backgroundRepeat: "no-repeat",
                    }}
                    image={`https:${
                      gameList.image.replace("t_thumb", "t_cover_big")
                    }`}
                  />
                )
              }
            })
          }
        </Card>
        :
        <Card sx={{ width:"100%", height: "352px", backgroundColor: "#353941" }}>
        </Card>
      }
        <p className="title-list">{list.title}</p>
    </Box>
  )
}

PostList.propTypes = {
  list: PropTypes.object
}

export default PostList