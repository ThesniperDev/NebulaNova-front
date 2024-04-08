import { getAllReview } from '../../services/reviews'

import { useState, useEffect } from 'react'
import "./Review.css"

import {
    Box,
    Container,
    Card,
    CardContent,
    Rating
} from "@mui/material"

const Review = () => {

    const [reviews, setReviews] = useState([])

    useEffect(()=> {
        getAllReviewList()
    }, [])

     const getAllReviewList = async () => {
        const res = await getAllReview()
        setReviews(res)
     }

    const displayAllReviews = () => {
        const reviewsList = reviews.map((review) => {
            
        return(
            <Container key={review.id} sx={{display:"flex", width: "30vw", justifyContent:"flex-start" }}>
            <Card sx={{ width:"100%", display: "flex"}}>
            <Card sx={{ height: 164, width: 164, backgroundColor:"red", backgroundImage:`url(https:${review.game && review.game.image.replace('t_thumb', 't_cover_big')})`, backgroundSize:"100% 100%", backgroundRepeat:"no-repeat"}}
          ></Card>
            <CardContent sx={{ width: "100%"}}>
                <Box sx={{display:"flex", flexWrap:"wrap"}}>
                    <h3>{review.game && review.game.title}</h3>
                    <Rating name="disabled" value={review.range} disabled size='small'/>
                </Box>
                <Box sx={{maxHeight:100}}>
                    <h6>Description:</h6>
                    <div className="description">{review.description} </div>
                </Box>
            </CardContent>
            </Card>
         </Container>
            )
        })
        return reviewsList
    }

  return (
    <>
        {displayAllReviews()}
    </>

  )
}

export default Review