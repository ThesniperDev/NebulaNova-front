import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getOneGameInfo } from "../../services/loginUserService";

import { Rating } from "@mui/material";

import "./UserReview.css";

const UserReview = () => {
  const { idGame } = useParams();
  const [game, setGame] = useState({});
  const [review, setReview] = useState("");
  const [rateValue,setRateValue] = useState("")


  const handleGameInfo = async () => {
    const res = await getOneGameInfo(idGame);
    setGame(res);
  };

  useEffect(() => {
    handleGameInfo();
  }, []);

  return (
    
    <section className="review-wrapper">
      <article>
        <div className="header">
          <h1 className="title">WRITE A REVIEW</h1>
          <p>{game.title}</p>
        </div>
        <div className="review">
          <label>Write your review:</label>
          <textarea type="text-" className="editor" value ={review} onChange={(e) => setReview(e.target.value) }>
          </textarea>
          <div className="game-rating">
            Rate your game:
            <Rating sx={{display:"flex", ml:"16px", mt:"10px"}} className="stars-color" onChange={(e) => {setRateValue(e.target.value)}}/>
          </div>
        </div>
        <div className="button-wrapper">
          <button className="btn-publish">Publish</button>
          <button className="btn-delete" onClick={() => setReview("")}>Delete</button>
        </div>
      </article>
    </section>
  );
};

export default UserReview;
