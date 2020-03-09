import React from 'react';
import { Helmet } from 'react-helmet';


const Head = ({ title }) => {
  switch (title) {
    case '/':
      return (
        <Helmet>
          <meta charSet="utf-8" />
          <html lang="fr" />
          <title>
            Ismaël Mmadi | IMM
          </title>

        </Helmet>
      );

    case '/profil':
    {
      const locaSplit = title.split('/');
      const toUpper = (a) => (`${a}`).charAt(0).toUpperCase() + a.substr(1);
      return (
        <Helmet>
          <meta charSet="utf-8" />
          <html lang="fr" />
          <title>
            IMM |
            {' '}
            {toUpper(locaSplit[1])}
          </title>

        </Helmet>
      );
    }
    case '404':
      return (
        <Helmet>
          <meta charSet="utf-8" />
          <html lang="fr" />
          <title>
            {title}
          </title>

        </Helmet>
      );

    default:
      return (
        <Helmet>
          <meta charSet="utf-8" />
          <html lang="fr" />
          <title>
            Projets |
            {' '}
            {title}
          </title>

        </Helmet>
      );
  }
};

export default Head;
