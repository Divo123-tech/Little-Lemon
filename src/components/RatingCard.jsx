import { Link } from "react-router-dom";
import Star from "./StarRating";

function RatingCard({ pic, user, rating, text }) {

  const stars = Array.from({ length: Number(rating) }, (_, index) => (
    <Star key={index} />
  ));


  return (
    <div className="rating-card">
      <div className="rating-header">
        <img
          className="avatar"
          src={pic}
          alt="Avatar"
          style={{ width: "100%" }}
        />
        <div className="rating-info" style={{display: "grid"}}>
          <h4 className="rating-user">{user}</h4>
          <p className="rating-stars">{stars}</p>
        </div>
      </div>
      <p className="rating-text">{text}</p>
    </div>
  );
}

export default RatingCard;