// Navbar.js
import React from 'react';
import CartWidget from './CartWidget';

const NavBar = () => {
  return (
    <nav className="navbar navbar-light bg-light">
      <a className="navbar-brand" href="#">MiTienda</a>
      <a className="navbar-brand" href="#">MiTienda</a>
      <a className="navbar-brand" href="#">MiTienda</a>
      <a className="navbar-brand" href="#">MiTienda</a>
      <CartWidget />
    </nav>
  );
};

export default NavBar;
