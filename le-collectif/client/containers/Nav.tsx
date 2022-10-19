import Credential from "./Credential";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <div id='nav-bar'>
      <div id='logo'>
        <Link to={"/"}><h2>le collectif</h2></Link>
      </div>
      <div id='nav-items'>
        <Link to={"/cart"}><button>Cart</button></Link>
        <Link to={"/credentials"}><button>Login</button></Link>
      </div>
    </div>
  )
}

export default Nav;