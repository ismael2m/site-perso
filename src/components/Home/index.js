import React from 'react';
import scrollTo from 'gatsby-plugin-smoothscroll';


// = Icônes
import * as FontAwesome from 'react-icons/fa';
import arrow from '../../../static/icon/down-arrow.svg';
// = Composants

// = Scss
import './home.scss';

const Home = ({ data }) => {
  const {
    title, intro, links,
  } = data;


  const Icon = (props) => {
    const { iconName, size, color } = props;
    const icon = React.createElement(FontAwesome[iconName]);
    return (
      <div style={{ fontSize: size, color }}>{icon}</div>
    );
  };
  return (
    <div className="home">
      <div className="home-content">
        <h1
          className="home-content-title"
          data-sal="slide-up"
          data-sal-duration="1000"
          data-sal-easing="ease"
        >
          {title}
        </h1>

        <div>
          <p
            className="home-content-profile"
            data-sal="slide-up"
            data-sal-duration="1000"
            data-sal-delay="300"
            data-sal-easing="ease"
          >
            {intro}
          </p>
          <div
            className="home-content-links"
            data-sal="slide-down"
            data-sal-duration="1000"
            data-sal-delay="800"
            data-sal-easing="ease"
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
            data-sal="slide-down"
            data-sal-duration="1000"
            data-sal-delay="800"
            data-sal-easing="ease"
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
            data-sal="fade"
            data-sal-duration="1000"
            data-sal-delay="900"
            data-sal-easing="ease"
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
