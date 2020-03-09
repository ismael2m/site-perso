import React from 'react';
import classNames from 'classnames';

import './hamburgers.scss';

const Burger = ({ click, isOpen }) => {
  const burgerStyle = classNames('nav-content-bars hamburger hamburger--spring', { 'nav-content-bars hamburger hamburger--spring is-active': isOpen });
  return (
    <div className={burgerStyle} onClick={click}>
      <span className="hamburger-box">
        <span className="hamburger-inner" />
      </span>
    </div>
  );
};

export default Burger;
