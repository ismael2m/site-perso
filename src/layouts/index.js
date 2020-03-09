import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { useStaticQuery, graphql } from 'gatsby';

import Transition from '../components/Transition';
import Navbar from '../components/NavBar';
import Footer from '../components/Footer';
import Head from '../components/Head';

// == Données au format JSON
import data from '../data/data.json';


const Layout = ({ children, location }) => {
  const dataQuery = useStaticQuery(graphql`
  query {
    site {
      siteMetadata {
        title
        description
      }
    }
  }
`);

  useEffect(() => { window.scrollTo(0, 0); });
  return (
    <>
      {/* <Helmet>
        <title>{dataQuery.site.siteMetadata.title}</title>
      </Helmet> */}
      <Head title={dataQuery.site.siteMetadata.title} />
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
