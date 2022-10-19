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
          <Link style={{textDecoration: 'none', color: 'whitesmoke'}} to={"/cart"}><h5 className='nav-item'>cart</h5></Link>
          <Link style={{textDecoration: 'none', color: 'whitesmoke'}} to={"/signUp"}><h5 className='nav-item'>sign in</h5></Link>
      </div>  
    </div>
  )
}

export default Nav;