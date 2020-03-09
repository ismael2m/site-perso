import React from 'react';
import { Helmet } from 'react-helmet';


const Head = ({ title }) => {
  switch (title) {
    case 'Ismaël Mmadi':
      return (
        <Helmet>
          <meta charSet="utf-8" />
          <html lang="fr" />
          <title>
            {title}
          </title>
          <link href="https://unpkg.com/aos@2.3.1/dist/aos.css" rel="stylesheet" />
          <script src="https://unpkg.com/aos@2.3.1/dist/aos.js" />
        </Helmet>
      );

    case '/profil':
      return (
        <Helmet>
          <meta charSet="utf-8" />
          <html lang="fr" />
          <title>
            {title}
          </title>
          <link href="https://unpkg.com/aos@2.3.1/dist/aos.css" rel="stylesheet" />
          <script src="https://unpkg.com/aos@2.3.1/dist/aos.js" />
        </Helmet>
      );

    case '404':
      return (
        <Helmet>
          <meta charSet="utf-8" />
          <html lang="fr" />
          <title>
            {title}
          </title>
          <link href="https://unpkg.com/aos@2.3.1/dist/aos.css" rel="stylesheet" />
          <script src="https://unpkg.com/aos@2.3.1/dist/aos.js" />
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
          <link href="https://unpkg.com/aos@2.3.1/dist/aos.css" rel="stylesheet" />
          <script src="https://unpkg.com/aos@2.3.1/dist/aos.js" />
        </Helmet>
      );
  }
};


//   if (title === 'Ismaël Mmadi') {
//     return (
//       <Helmet>
//         <title>
//           {title}
//         </title>
//       </Helmet>
//     );
//   } if (title !== '/profil') {
//     return (
//       <Helmet>
//         <title>
//           Projets |
//           {' '}
//           {title}
//         </title>
//       </Helmet>
//     );
//   } const locaSplit = title.split('/');
//   const toUpper = (a) => (`${a}`).charAt(0).toUpperCase() + a.substr(1);
//   return (
//     <Helmet>
//       <title>
//         IMM |
//         {' '}
//         {toUpper(locaSplit[1])}
//       </title>
//     </Helmet>
//   );
// };

export default Head;
