import "./PostCard.css";

import { Box, Container, Card, CardContent, CardMedia, Rating } from "@mui/material";

import PropTypes from "prop-types";

const PostCard = ({ review }) => {
  console.log(review)
  return (
    <>
      <Container
        sx={{ display: "flex", width: "40vw", justifyContent: "flex-start"}}
      >
        <Card sx={{ width: "100%", display: "flex"}}>
          <CardMedia
            sx={{
              height: 164,
              width: 164,
              backgroundColor: "red",              
              backgroundSize: "100% 100%",
              backgroundRepeat: "no-repeat",
            }}
            image={`https:${
              review.game &&
              review.game.image.replace("t_thumb", "t_cover_big")
            }`}          
          />
          <CardContent sx={{ width: "100%" }}>
            <Box sx={{ display: "flex", flexWrap: "wrap", justifyContent:"space-between"}}>
              <h3>{review.game && review.game.title}</h3>
              <Rating
                name="rating"
                value={parseInt(review.range)}
                readOnly
                size="small"
                className="stars-color"
              />
            </Box>
            <Box sx={{ maxHeight: 100 }}>
              <h6>Description:</h6>
              <div className="description">{review.description} </div>
            </Box>
          </CardContent>
        </Card>
      </Container>
    </>
  );
};

PostCard.propTypes = {
  review: PropTypes.object,
};

export default PostCard;
