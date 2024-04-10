import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getOneGameInfo } from "../../services/loginUserService";

import { TextField } from "@mui/material";

import "./UserReview.css";

const UserReview = () => {
  const { idGame } = useParams();
  const [game, setGame] = useState({});
  const [review, setReview] = useState({});

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
          <TextField
            sx={{boxShadow: "0px 0px 4px #fff", color:"#fff !important"}}
            color="fourth"
            label="Write your review"
            placeholder="Plese enter the text"
            multiline
            rows={16}
            margin="dense"
            fullWidth
          />
        </div>
      </article>
      <aside></aside>
    </section>
  );
};

export default UserReview;
