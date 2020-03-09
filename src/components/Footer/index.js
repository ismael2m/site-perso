import React from 'react';

// = Icônes
import { FaInstagram, FaGithub, FaLinkedinIn } from 'react-icons/fa';
import gatsby from '../../../static/icon/gatsby.png';
import netlify from '../../../static/icon/netlify.png';

// = SCSS
import './footer.scss';

const Footer = ({ data } ) => {
  const {
    question, contact, email, copyright, tools,
  } = data;

  const date = new Date().getFullYear();
  const split = tools.split('*');

  return (
    <footer className="footer">
      <h2 className="footer-question">{question}</h2>
      <p className="footer-contact">{contact}</p>
      <a href={`mailto:${email}`}><button type="button" className="footer-button">M'envoyer un mail</button></a>
      <div className="footer-icons">
        <a href="https://www.linkedin.com/in/ismael-mmadi-dev" target="_blank" rel="noopener noreferrer"><FaLinkedinIn className="footer-icons-icon footer-in" /></a>
        <a href="https://www.github.com/ismael2m" target="_blank" rel="noopener noreferrer"><FaGithub className="footer-icons-icon footer-git" /></a>
        <a href="https://www.instagram.com/jesuistongraphiste" target="_blank" rel="noopener noreferrer"><FaInstagram className="footer-icons-icon footer-insta" /></a>
      </div>
      <div className="footer-copyright">
        <span>
          &copy;
          {`${date} | ${copyright}`}
        </span>

        <div className="footer-copyright-tools">
          {split[0]}
          {' '}
          <a href="https://www.gatsbyjs.org" target="_blank" rel="noopener noreferrer"><img src={gatsby} alt="gatsby" className="footer-copyright-tools-gatsby" /></a>
          {split[1]}
          {' '}
          <a href="https://www.netlify.com/" target="_blank" rel="noopener noreferrer"><img src={netlify} alt="netlify" className="footer-copyright-tools-netlify" /></a>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
