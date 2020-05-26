import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

// == Scss
import './hamburgers.scss';

const Burger = ({ click, isOpen }) => {
  const burgerStyle = classNames('nav-content-bars hamburger hamburger--spring', { 'nav-content-bars hamburger hamburger--spring is-active': isOpen });
  return (
    <div
      role="button"
      tabIndex={0}
      className={burgerStyle}
      onClick={click}
      onKeyDown={click}
    >
      <span className="hamburger-box">
        <span className="hamburger-inner" />
      </span>
    </div>
  );
};

// == PropTypes
Burger.propTypes = {
  click: PropTypes.func.isRequired,
  isOpen: PropTypes.bool.isRequired,
};

export default Burger;
