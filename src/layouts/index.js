import React from 'react';

// == PropTypes
import PropTypes from 'prop-types';

// == Composants
import Transition from '../components/Transition';
import Navbar from '../components/NavBar';
import Footer from '../components/Footer';
import Head from '../components/Head';

// == Données au format JSON
import data from '../data/data.json';

const Layout = ({ children, location }) => {
  const { pathname } = location;

  return (

    <>
      <Head title={pathname} />
      <Navbar />
      <Transition location={location}>
        {children}
      </Transition>
      {
        pathname === '/' && <Footer data={data.footer} />
      }
    </>

  );
};

// == PropTypes
Layout.propTypes = {
  children: PropTypes.shape().isRequired,
  location: PropTypes.shape(
    { pathname: PropTypes.string.isRequired },
  ).isRequired,
};

export default Layout;
