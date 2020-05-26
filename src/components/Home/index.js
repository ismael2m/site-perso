import React from 'react';
import PropTypes from 'prop-types';

// = Scss
import './home.scss';

const Home = ({ data }) => {
  const { title } = data;

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
      </div>
    </div>
  );
};

// == PropTypes
Home.propTypes = {
  data: PropTypes.shape(
    {
      title: PropTypes.string.isRequired,
    },
  ).isRequired,
};

export default Home;
