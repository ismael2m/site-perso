import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

// == Scss
import './hamburgers.scss';

const Burger = ({ click, isOpen }) => {
  const burgerStyle = classNames('nav-content-bars hamburger hamburger--spring', { 'nav-content-bars hamburger hamburger--spring is-active': isOpen });
  return (
    <button
      type="button"
      className={burgerStyle}
      onClick={click}
      onKeyDown={click}
    >
      <span className="hamburger-box">
        <span className="hamburger-inner" />
      </span>
    </button>
  );
};

// == PropTypes
Burger.propTypes = {
  click: PropTypes.func.isRequired,
  isOpen: PropTypes.bool.isRequired,
};

export default Burger;
