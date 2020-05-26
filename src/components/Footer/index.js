import React from 'react';
import PropTypes from 'prop-types';

// = Icônes
import { FaInstagram, FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { FiMail } from 'react-icons/fi';
import gatsby from '../../../static/icon/gatsby.png';
import netlify from '../../../static/icon/netlify.png';

// = SCSS
import './footer.scss';

const Footer = ({ data }) => {
  const {
    email, copyright, tools,
  } = data;


  const date = new Date().getFullYear();
  const split = tools.split('*');

  return (
    <footer className="footer">
      <div className="footer-icons">
        <div className="footer-icons-box">
          <a href={`mailto:${email}`}>
            <FiMail className="footer-icons-box-icon" />
          </a>
        </div>
        <div className="footer-icons-box">
          <a href="https://www.linkedin.com/in/ismael-mmadi-dev">
            <FaLinkedinIn className="footer-icons-box-icon" />
          </a>
        </div>
        <div className="footer-icons-box">
          <a href="https://www.github.com/ismael2m">
            <FaGithub className="footer-icons-box-icon" />
          </a>
        </div>
        <div className="footer-icons-box">
          <a href="https://www.instagram.com/jesuistongraphiste">
            <FaInstagram className="footer-icons-box-icon" />
          </a>
        </div>
      </div>
      <div className="footer-copyright">
        <span>
          &copy;
          {`${date}  ${copyright}`}
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

// == PropTypes
Footer.propTypes = {
  data: PropTypes.shape(
    {
      email: PropTypes.string.isRequired,
      copyright: PropTypes.string.isRequired,
      tools: PropTypes.string.isRequired,
    },
  ).isRequired,
};

export default Footer;
