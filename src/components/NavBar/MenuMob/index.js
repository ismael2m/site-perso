import React from 'react';
import classNames from 'classnames';

import { Link } from 'gatsby';

// = SCSS
import './menumob.scss';

const MenuMob = ({ isOpen, click }) => {
  const menuVisible = classNames('menu-hidden', { menu: isOpen });
  return (
    <div className={menuVisible}>
      <div className="menu-group">
        <Link to="/" className="menu-group-link" onClick={click}>Portfolio</Link>
        <a href="https://drive.google.com/open?id=1EDa7ecJB5yNvlqc2vcyO_znLGPIvywVC" className="menu-group-link">CV</a>
        <Link to="profil" className="menu-group-link" onClick={click}>A propos</Link>
      </div>

    </div>
  );
};
export default MenuMob;
