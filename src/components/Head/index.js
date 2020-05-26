import React from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';

const Head = ({ title }) => {
  switch (title) {
    case '/':
      return (
        <HelmetProvider>
          <Helmet>
            <meta charSet="utf-8" />
            <meta name="description" content="Site personnel" />
            <html lang="fr" />
            <title>
              Ismaël Mmadi | IMM
            </title>
          </Helmet>
        </HelmetProvider>
      );

    case '/profil':
    {
      const locaSplit = title.split('/');
      const toUpper = (a) => (`${a}`).charAt(0).toUpperCase() + a.substr(1);
      return (
        <HelmetProvider>
          <Helmet>
            <meta charSet="utf-8" />
            <meta name="description" content="Site personnel" />
            <html lang="fr" />
            <title>
              IMM |
              {' '}
              {toUpper(locaSplit[1])}
            </title>
          </Helmet>
        </HelmetProvider>
      );
    }
    case '404':
      return (
        <HelmetProvider>
          <Helmet>
            <meta charSet="utf-8" />
            <meta name="description" content="Site personnel" />
            <html lang="fr" />
            <title>
              {title}
            </title>
          </Helmet>
        </HelmetProvider>
      );

    default:
    {
      const locaSplit = title.split('/');
      const toUpper = (a) => (`${a}`).charAt(0).toUpperCase() + a.substr(1);
      return (
        <HelmetProvider>
          <Helmet>
            <meta charSet="utf-8" />
            <meta name="description" content="Site personnel" />
            <html lang="fr" />
            <title>
              Projets |
              {' '}
              {toUpper(locaSplit[1])}
            </title>
          </Helmet>
        </HelmetProvider>
      ); }
  }
};

export default Head;
