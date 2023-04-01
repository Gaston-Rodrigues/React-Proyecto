import React from 'react';
import { Link } from 'react-router-dom';
import { CartWidget } from '../cart/CartWidget';

export const NavBar = () => {
  return (
    <header>
      <nav className='navbar'>
        <Link to='/' className='navbar__title'>
        <img src='https://i.imgur.com/cmDomu5.png' alt='Logo' />
        </Link>
        <ul className='navbar__list'>
          <Link to='/category/monitores' className='navbar__list-item'>
           Monitores
          </Link>
          <Link to='/category/teclados' className='navbar__list-item'>
            Teclados
          </Link>
          <Link to='/category/auriculares' className='navbar__list-item'>
            Auriculares
          </Link>
          <Link to='/wishlist' className='navbar__list-item'>
            Favoritos
          </Link>
          <Link to='/cart' className='navbar__list-item'>
            <CartWidget />
          </Link>
        </ul>
      </nav>
    </header>
  );
};
