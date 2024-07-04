import { Link } from "react-router-dom";


function Header () {

    return <header>
   
    <div className="header-wrapper">

      <div className="header-text">

    <div>
    <h1 className="ll-heading">Little Lemon</h1>
    <h2 className="ll-heading">Chicago</h2>

    </div>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
    <Link className="button" aria-label="On Click" role="button" to='/booking'>Reserve a Table</Link>

        </div>

    <img className="hero-img" src="/assets/restauranfood.jpg" alt="" />

    </div>

   
    </header>
    
}

export default Header;