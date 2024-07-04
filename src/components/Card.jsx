import { Link } from "react-router-dom";
function Card({ pic, dish, price, description }) {
  return (
    <div className="card">
      <img src={"/assets/" + pic} alt="Avatar" style={{ width: "100%" }} />
      <div className="card-text">
        <div className="card-title">
          <h4>{dish}</h4>
          <span className="price">{price}</span>
        </div>
        <p>{description}</p>
      </div>
      <Link to="#" aria-label="On Click" className="order-link">
        Order a delivery
      </Link>
    </div>
  );
}

export default Card;