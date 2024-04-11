import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getOneGameInfo, createReview } from "../../services/loginUserService";

import { Rating } from "@mui/material";

import "./UserReview.css";

const UserReview = () => {
  const { idGame } = useParams();
  const [game, setGame] = useState({});
  const [review, setReview] = useState("");
  const [rateValue, setRateValue] = useState(0);
  const userId = localStorage.getItem('userId')
  const [errorText,setErrorText] = useState("")
  const navigate = useNavigate()

  const handleGameInfo = async () => {
    const res = await getOneGameInfo(idGame);
    setGame(res);
  };

  const handleSendReview = async () => {
    try {
      const res = await createReview( review, rateValue, userId, idGame )  
      //navigate('/')
      setRateValue(0)
    } catch (error) {
      if (!error?.response) {
        setErrorText("No response from server");
      } else if (review === '') {
        setErrorText("Your review is empty");
      } else {
        setErrorText("Indicates a rate");
      }
    }
  }

  useEffect(() => {
    handleGameInfo();
  }, []);

  


  console.log(errorText);

  return (
    <section className="review-wrapper">
      <article>
        <div className="header">
          <h1 className="title">WRITE A REVIEW</h1>
          <p>{game.title}</p>
        </div>
        <div className="review">
          <label>Write your review:</label>
          <textarea
            type="text-"
            className="editor"
            value={review}
            onChange={(e) => setReview(e.target.value)}
          ></textarea>
          <div className="game-rating">
            Rate your game:
            <Rating
              sx={{ display: "flex", ml: "16px", mt: "10px" }}
              className="stars-color"
              onChange={(e) => {
                setRateValue(e.target.value);
              }}
              defaultValue={rateValue}
            />
          </div>
        </div>
        <div className="button-wrapper">
          <button className="btn-publish" onClick={ ()=> handleSendReview()}>Publish</button>
          <button className="btn-delete" onClick={() => setReview("")}>
            Delete
          </button>
        </div>
      </article>
    </section>
  );
};

export default UserReview;
