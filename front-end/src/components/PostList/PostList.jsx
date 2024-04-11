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
      <Card sx={{ display: "flex" }}>
        {
          gamesList && gamesList.map((gameList, idx) => {
            if (idx < 2) {
              return(
                <CardMedia
                  key={idx}
                  sx={{
                    height: 312,
                    width: 312,
                    backgroundSize: "100% 100%",
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
        <p className="title-list">{list.title}</p>
    </Box>
  )
}

PostList.propTypes = {
  list: PropTypes.object
}

export default PostList