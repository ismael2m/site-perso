import React from 'react';
import { Link } from 'gatsby';

// == Composants
import Head from '../components/Head';
import AbFooter from '../components/AbFooter';

// == Données au format JSON
import data from '../data/data.json';


// == SCSS
import './404.scss';




const ErrorPage = ({ location }) => {

  return (
    <>
      <Head title="404" />
      <div className="error">
        <h1 className="error-title">Oups!</h1>
        <p className="error-text">Désolé mais la page que vous demandez n'existe pas.</p>
        <Link to="/" className="error-link" > Retour à la page d'accueil</Link>
        <AbFooter />

      </div>
    </>
  );
};

export default ErrorPage;