import { useEffect, useState } from "react";
import RatingCard from "./RatingCard";

function CustomersSay() {
  const [reviews, setReviews] = useState([
    {
      pic: "/Assets/users/03.jpg",
      user: "John Doe",
      stars: "5",
      text: "Amazing taste and great presentation!",
    },
    {
      pic: "/Assets/users/01.jpg",
      user: "Jane Smith",
      stars: "4",
      text: "Really enjoyed it, but a bit too salty for my taste.",
    },
    {
      pic: "/Assets/users/02.jpg",
      user: "Alice Johnson",
      stars: "5",
      text: "Best bruchetta I've ever had!",
    },

    {
      pic: "/Assets/users/05.jpg",
      user: "Charlie Davis",
      stars: "4",
      text: "Very good, but could use more variety in toppings.",
    },
  ]);
  // const fetchRevs = () => {
  //   fetch("https://randomuser.me/api/?results=4")
  //     .then((res) => res.json())
  //     .then((data) => setReviews(data.results))
  //     .then(() => console.log(reviews[0].name.first+" "+ reviews[0].name.last));
  // };
  // useEffect(() => {
  //   fetchRevs();
  // },[]);
  return (
    <section className=" rating-section">
      <h2 className="section-title">Testimonials</h2>
      <div className="section-content">
        <div className="reviews">
          {reviews.length > 0 ? (
            reviews.map((review) => (
              <RatingCard
                key={review.user}
                pic={review.pic}
                user={review.user}
                rating={review.stars}
                text={review.text}
              />
            ))
          ) : (
            <p>No reviews yet</p>
          )}
        </div>
      </div>
    </section>
  );
}

export default CustomersSay;