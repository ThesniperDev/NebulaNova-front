import "./PostCard.css";

import {
  Box,
  Container,
  Card,
  CardContent,
  CardMedia,
  Rating,
} from "@mui/material";

import PropTypes from "prop-types";

const PostCard = ({ review }) => {
  const date = new Date(review.updatedAt);
  const formattedDate = date.toLocaleDateString();
  return (
    <>
      <Container
        sx={{
          display: "flex",
          width: "30vw",
          minWidth: 360,
          justifyContent: "flex-start",
          cursor: "pointer",
        }}
        className="review-container"
        padding={0}
      >
        <Card sx={{ width: "100%", display: "flex" }}>
          <CardMedia
            sx={{
              height: 328,
              width: 328,
              backgroundSize: "100% 100%",
              backgroundRepeat: "no-repeat",
            }}
            image={`https:${
              review.game && review.game.image.replace("t_thumb", "t_cover_big")
            }`}
          />
          <CardContent
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              width: "100%",
              backgroundColor: "secondary.main",
              color: "#fff",
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "space-between",
              }}
            >
              <h2>{review.game && review.game.title}</h2>
              <Rating
                name="rating"
                value={parseInt(review.range)}
                readOnly
                size="small"
                className="stars-color"
              />
            </Box>
            <Box sx={{ height: "90%", width: "100%", margin: "auto" }}>
              <Box sx={{marginTop: "16px"}}>
                <h4>Review:</h4>
                <div className="description">{review.description} </div>
              </Box>
            </Box>
            <Box
              sx={{
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "space-between",
                fontSize: 14,
              }}
            >
              <span>
                <strong>Autor: </strong>
                {review.user.userName}
              </span>
              <span>
                <strong>Created: </strong>
                {formattedDate}
              </span>
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
