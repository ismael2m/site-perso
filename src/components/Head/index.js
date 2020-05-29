import React from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';

const Head = ({ title }) => {
  switch (title) {
    case '/':
      return (
        <HelmetProvider>
          <Helmet>
            <html lang="fr" />
            <meta charSet="utf-8" />
            <meta name="description" content="Ismaël Mmadi - Portfolio" />
            <meta property="og:site_name" content="ismael2m" />
            <meta property="og:title" content="Ismaël Mmadi - Portfolio" />
            <meta property="og:image" content="https://i.imgur.com/hF04rz8.jpg?foo=bar" />
            <meta property="og:image:type" content="image/png" />
            <meta property="og:image:width" content="905" />
            <meta property="og:image:height" content="684" />
            <meta property="og:image:secure_url" content="https://i.imgur.com/hF04rz8.jpg?foo=bar" />
            <meta
              property="og:description"
              content="Portfolio D'Ismaël Mmadi, Développeur Web Front-end | React JS"
            />
            <meta property="og:url" content="https://www.ismael2m.fr?foo=bar" />
            <meta property="og:type" content="website" />
            <title>
              Ismaël Mmadi | I2M
            </title>
          </Helmet>
        </HelmetProvider>
      );

    case '/profil':
    {
      const locaSplit = title.split('/');
      const toUpper = (path) => (`${path}`).charAt(0).toUpperCase() + path.substr(1);
      return (
        <HelmetProvider>
          <Helmet>
            <html lang="fr" />
            <meta charSet="utf-8" />
            <meta name="description" content="Ismaël Mmadi - Portfolio" />
            <meta property="og:site_name" content="ismael2m" />
            <meta property="og:title" content="Ismaël Mmadi - Portfolio" />
            <meta property="og:image" content="https://i.imgur.com/hF04rz8.jpg?foo=bar" />
            <meta property="og:image:type" content="image/png" />
            <meta property="og:image:width" content="905" />
            <meta property="og:image:height" content="684" />
            <meta property="og:image:secure_url" content="https://i.imgur.com/hF04rz8.jpg?foo=bar" />
            <meta
              property="og:description"
              content="Portfolio D'Ismaël Mmadi, Développeur Web Front-end | React JS"
            />
            <meta property="og:url" content="https://www.ismael2m.fr?foo=bar" />
            <meta property="og:type" content="website" />
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
            <html lang="fr" />
            <meta charSet="utf-8" />
            <meta name="description" content="Ismaël Mmadi - Portfolio" />
            <meta property="og:site_name" content="ismael2m" />
            <meta property="og:title" content="Ismaël Mmadi - Portfolio" />
            <meta property="og:image" content="https://i.imgur.com/hF04rz8.jpg?foo=bar" />
            <meta property="og:image:type" content="image/png" />
            <meta property="og:image:width" content="905" />
            <meta property="og:image:height" content="684" />
            <meta property="og:image:secure_url" content="https://i.imgur.com/hF04rz8.jpg?foo=bar" />
            <meta
              property="og:description"
              content="Portfolio D'Ismaël Mmadi, Développeur Web Front-end | React JS"
            />
            <meta property="og:url" content="https://www.ismael2m.fr?foo=bar" />
            <meta property="og:type" content="website" />
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
            <html lang="fr" />
            <meta charSet="utf-8" />
            <meta name="description" content="Ismaël Mmadi - Portfolio" />
            <meta property="og:site_name" content="ismael2m" />
            <meta property="og:title" content="Ismaël Mmadi - Portfolio" />
            <meta property="og:image" content="https://i.imgur.com/hF04rz8.jpg?foo=bar" />
            <meta property="og:image:type" content="image/png" />
            <meta property="og:image:width" content="905" />
            <meta property="og:image:height" content="684" />
            <meta property="og:image:secure_url" content="https://i.imgur.com/hF04rz8.jpg?foo=bar" />
            <meta
              property="og:description"
              content="Portfolio D'Ismaël Mmadi, Développeur Web Front-end | React JS"
            />
            <meta property="og:url" content="https://www.ismael2m.fr?foo=bar" />
            <meta property="og:type" content="website" />
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
