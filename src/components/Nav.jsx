import { Link } from "react-router-dom";

function Nav({isBurger, setBurger}) {


  
  return (<>
    <nav className="nav">
      <div className="items-wrapper">
      <Link to="/">
      
        <img src="/logo.svg" alt="" />
      </Link>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/">About</Link>
          </li>
          <li>
            <Link to="/">Menu</Link>
          </li>
          <li>
            <Link to="/">Order Online</Link>
          </li>
          <li>
            <Link to="/">Login</Link>
          </li>
        </ul>
        <div className="show-burger" onClick={()=>setBurger(!isBurger)}> ☰</div>
      </div>
    
    </nav>
    {isBurger && <div className="sidebar">
      <ul onClick={() => setBurger(false)}>
        <li><div className="hide-burger" onClick={() => setBurger(false)}>X</div></li>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/">About</Link>
          </li>
          <li>
            <Link to="/">Menu</Link>
          </li>
          <li>
            <Link to="/">Order Online</Link>
          </li>
          <li>
            <Link to="/">Login</Link>
          </li>
        </ul>
      </div>}
  
  </>
  );
}

export default Nav;