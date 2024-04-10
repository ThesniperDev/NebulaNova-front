import { useState, useEffect } from "react";
import "./Review.css";
import { getAllReview } from "../../services/userServices";
import PostCard from "../../components/PostCard/PostCard"

const Review = () => {
  const [reviews, setReviews] = useState([]);
  const [searchText, setSearchText] = useState("");

  const handleAllReviewList = async () => {
    const res = await getAllReview();
    setReviews(res);
  };

  useEffect(() => {
    handleAllReviewList();
  }, []);
  return (
    <section className="reviews-container">
      <div className="filter-container">
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

export default Review;
