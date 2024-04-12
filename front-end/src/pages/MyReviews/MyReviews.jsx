import { useState, useEffect } from "react";
import "./MyReviews.css";
import { getAllUserReviews } from "../../services/loginUserService"
import PostCard from "../../components/PostCard/PostCard"

const MyReviews = () => {
  const [reviews, setReviews] = useState([]);
  const [searchText, setSearchText] = useState("");

  const handleAllUserReviewList = async () => {
    const res = await getAllUserReviews();
    setReviews(res);
  };

  useEffect(() => {
    handleAllUserReviewList();
  }, []);
  
  return (
    <section className="reviews-container">
      <div className="filter-container-review">
        <input
          type="text"
          className="input-review"
          placeholder="Search for a review"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
      </div>
      <div className="reviewList-container">
        {reviews &&
          reviews
            .filter((review) =>
              review.game.title.toLowerCase().includes(searchText.toLowerCase())
            )
            .map((review) => <PostCard key={review.id} review={review} className="postCard"/>)}
      </div>
    </section>
  );
};

export default MyReviews;