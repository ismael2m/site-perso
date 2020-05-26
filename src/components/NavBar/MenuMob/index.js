import React from 'react';
import classNames from 'classnames';
import { Link } from 'gatsby';

// == PropTypes
import PropTypes from 'prop-types';

// == Icônes
import { FaInstagram, FaGithub, FaLinkedinIn } from 'react-icons/fa';

// == SCSS
import './menumob.scss';

const MenuMob = ({ isOpen, click }) => {
  const menuVisible = classNames('menu-hidden', { menu: isOpen });
  return (
    <div className={menuVisible}>
      <div className="menu-group">
        <Link to="/" className="menu-group-link" onClick={click}>Portfolio</Link>
        <a href="https://drive.google.com/open?id=1EDa7ecJB5yNvlqc2vcyO_znLGPIvywVC" className="menu-group-link">CV</a>
        <Link to="/profil" className="menu-group-link" onClick={click}>A propos</Link>
        <div className="menu-group-social">
          <a href="https://www.linkedin.com/in/ismael-mmadi-dev">
            <FaLinkedinIn className="menu-group-social-icon" />
          </a>
          <a href="https://www.github.com/ismael2m" >
            <FaGithub className="menu-group-social-icon" />
          </a>
          <a href="https://www.instagram.com/jesuistongraphiste">
            <FaInstagram className="menu-group-social-icon" />
          </a>
        </div>
      </div>

    </div>
  );
};

// == PropTypes
MenuMob.propTypes = {
  click: PropTypes.func.isRequired,
  isOpen: PropTypes.bool.isRequired,
};

export default MenuMob;
