import React, { useEffect } from 'react';
import Transition from '../components/Transition';
import Navbar from '../components/NavBar';
import Footer from '../components/Footer';
import Head from '../components/Head';

// == Données au format JSON
import data from '../data/data.json';


const Layout = ({ children, location }) => {
  useEffect(() => { window.scrollTo(0, 0); });
  return (
    <>
      <Head title={location.pathname} />
      <Navbar />
      <Transition location={location}>
        {children}
      </Transition>
      {
        location.pathname === '/' && <Footer data={data.footer} />
      }
    </>

  );
};


export default Layout;
