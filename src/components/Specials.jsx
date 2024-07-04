import { Link } from "react-router-dom";
import Card from "./Card";

function Specials() {
  const menu = [
    {
      dish: "Greek Salad",
      price: "$12.99",
      pic: "greekSalad.jpg",
      description:
        "The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons. ",
    },
    {
      dish: "Bruchetta",
      price: "$5.99",
      pic: "Bruchetta.jpg",
      description:
        "Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil. ",
    },
    {
      dish: "Lemon Dessert",
      price: "$5.00",
      pic: "lemonDessert.jpg",
      description:
        "This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined.",
    },
  ];
  return (
    <section>
      <div className="section-content specials">
        <div className="section-header">
          <h2 className="section-title">SPECIALS</h2>
          <Link to="/booking " className="button">
            Online Menu
          </Link>
        </div>

        <div className="cards-wrapper">
          {menu.map((item) => (
            <Card
              key={item.dish}
              dish={item.dish}
              price={item.price}
              pic={item.pic}
              description={item.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Specials;