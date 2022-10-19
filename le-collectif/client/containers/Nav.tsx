import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <div id='nav-bar'>
      <Link style={{textDecoration: 'none', color: 'whitesmoke'}} to={'/'}>
        <div id='logo'>
          <h2>le collectif</h2>
        </div>
      </Link>
        <div id='nav-items'>
          <Link to={"/cart"}><h5>cart</h5></Link>
          <Link to={"/signUp"}><h5>sign in</h5></Link>
      </div>  
    </div>
  )
}

export default Nav;