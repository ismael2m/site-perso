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
        <a href="https://www.linkedin.com/in/ismael-mmadi-dev"><FaLinkedinIn className="abfooter-icons-icon abfooter-in" /></a>
        <a href="https://www.github.com/ismael2m"><FaGithub className="abfooter-icons-icon abfooter-git" /></a>
        <a href="https://www.instagram.com/jesuistongraphiste"><FaInstagram className="abfooter-icons-icon abfooter-insta" /></a>
      </div>
    </div>
  );
};

export default AbFooter;
