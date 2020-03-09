import React from 'react';
import scrollTo from 'gatsby-plugin-smoothscroll';

// == Animation au scroll (AOS)
import AOS from 'aos';
import 'aos/dist/aos.css';

// = Icônes
import * as FontAwesome from 'react-icons/fa';
import arrow from '../../../static/icon/down-arrow.svg';
// = Composants

// = Scss
import './home.scss';

// Initialisation d'AOS
AOS.init();


const Home = ({ data }) => {
  const {
    title, intro, links,
  } = data;

  const Icon = props => {
    const { iconName, size, color } = props;
    const icon = React.createElement(FontAwesome[iconName]);
    return (
      <div style={{ fontSize: size, color: color }}>{icon}</div>
    );
  };
  return (
    <div className="home">
      <div className="home-content">
        <h1
          className="home-content-title"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-easing="ease"
          data-aos-offset="200"
        >
          {title}
        </h1>

        <div>
          <p
            className="home-content-profile"
            data-aos="fade-up"
            data-aos-duration="1500"
            data-aos-delay="300"
            data-aos-easing="ease"
          >
            {intro}
          </p>
          <div
            className="home-content-links"
            data-aos="fade"
            data-aos-delay="1200"
            data-aos-duration="1000"
          >
            {
               links.map((link) => (
                 <a
                   key={link.id}
                   href={link.url}
                   target="_blank"
                   rel="noopener noreferrer"
                   className="home-content-links-lk"
                 >
                   {link.name}
                 </a>
               ))
            }

          </div>
          <div
            className="home-content-links-mob"
            data-aos="fade"
            data-aos-delay="1200"
            data-aos-duration="1000"
          >
            {
               links.map((link) => (
                 <a
                   key={link.id}
                   href={link.url}
                   target="_blank"
                   rel="noopener noreferrer"
                   className="home-content-links-lk"
                 >
                   <Icon iconName={link.icon} size={35} color="black" />
                 </a>
               ))
            }

          </div>
          <button
            className="arrow-down"
            data-aos="fade"
            data-aos-delay="1200"
            data-aos-duration="1000"
            onClick={() => scrollTo('#projects')}
            type="button"
          >
            <img src={arrow} alt="down-arrow" className="home-content-arrow arrow-down-effect" />
          </button>
        </div>

      </div>
    </div>
  );
};

export default Home;
