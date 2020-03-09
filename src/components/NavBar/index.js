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
    <nav className="nav" id="outer-container">
      <div className="nav-content">
        <Link to="/" className="nav-content-logo" onClick={closeMenu}>Ismael Mmadi</Link>
        <Burger click={changeMenu} isOpen={isOpen} />
        <MenuMob isOpen={isOpen} click={changeMenu} />
        <div className="nav-content-group">
          <Link to="/" activeStyle={{ color: '#000', fontWeight: '500' }} className="nav-content-group-link">Portfolio</Link>
          <a href="https://drive.google.com/open?id=1EDa7ecJB5yNvlqc2vcyO_znLGPIvywVC" target="_blank" rel="noopener noreferrer" className="nav-content-group-link">CV</a>
          <Link to="/profil" activeStyle={{ color: '#000', fontWeight: '500' }} className="nav-content-group-link">A propos</Link>
        </div>
      </div>

    </nav>
  );
};

export default NavBar;
