import React from 'react';

// == Sass
import './abfooter.scss';

// = Icônes
import { FaInstagram, FaGithub, FaLinkedinIn } from 'react-icons/fa';

const AbFooter = () => {
  const date = new Date().getFullYear();
  return (
    <div className="abfooter">
      <span className="abfooter-name">
        &copy;
        {' '}
        {`${date} Ismael Mmadi`}
      </span>
      <div className="abfooter-icons">
        <FaLinkedinIn className="abfooter-icons-icon footer-in" />
        <FaGithub className="abfooter-icons-icon footer-git" />
        <FaInstagram className="abfooter-icons-icon footer-insta" />
      </div>
    </div>
  );
};

export default AbFooter;
