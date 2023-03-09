import './styles.css';
import CartWidget from '../CartWidget/CartWidget';
import { Link } from 'react-router-dom';

function NavBar() {
  return (
    <nav className="navbar shadow">
    <div className="container">
      <span className="navbar-brand">
      <Link to={"/"}>
        <img src="/img/logo.png"alt="Logo Vizion" className='imagen' />
      </Link>  
      </span>
     
      <li><Link to='/category/Teclados' className='link'>Teclados</Link></li>
      <li><Link to='/category/Monitores' className='link'>Monitores</Link></li>
      <li><Link to='category/Auriculares' className='link'>Auriculares</Link></li>
      <CartWidget className="cartWidget"/>
              
    </div>
    
  </nav>

  );
}
export default NavBar;