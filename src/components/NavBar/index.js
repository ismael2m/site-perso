import React, { useState } from 'react';


import { Link } from 'gatsby';

import Burger from './Burger';
import MenuMob from './MenuMob';


// = SCSS
import './navbar.scss';

const NavBar = () => {
  const [isOpen, stateMenu] = useState(false);

  const changeMenu = () => stateMenu(!isOpen);
  const closeMenu = () => stateMenu(false);

  return (
    <nav className="nav" id="top">
      <div className="nav-content">
        <div className="nav-content-block" />
        <div className="nav-content-group">
          <Link to="/" activeStyle={{ color: '#000', fontWeight: '700' }} className="nav-content-group-link">Portfolio</Link>
          <a href="https://drive.google.com/open?id=1CYadwMveHQqMbarsKjYoymmcwnGB_pcB" target="_blank" rel="noopener noreferrer" className="nav-content-group-link">CV</a>
          <Link to="/profil" activeStyle={{ color: '#000', fontWeight: '700' }} className="nav-content-group-link">A propos</Link>
        </div>
        <Link to="/" className="nav-content-logo" onClick={closeMenu}>I2M</Link>
        <Burger click={changeMenu} isOpen={isOpen} />
        <MenuMob isOpen={isOpen} click={changeMenu} />
        <div className="nav-content-group">
          <a href="https://www.linkedin.com/in/ismael-mmadi-dev" className="nav-content-group-link">LinkedIn</a>
          <a href="https://www.github.com/ismael2m" className="nav-content-group-link">GitHub</a>
          <a href="https://www.instagram.com/jesuistongraphiste" className="nav-content-group-link">Instagram</a>
        </div>
      </div>

    </nav>
  );
};

export default NavBar;
