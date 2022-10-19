import Credential from "./Credential";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <div id='nav-bar'>
      <Link to={"/"}>Logo</Link>
      <Link to={"/cart"}><button>Cart</button></Link>
      <Link to={"/credentials"}><button>Login</button></Link>
    </div>
  )
}

export default Nav;