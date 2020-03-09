import React from 'react';
import { Link } from 'gatsby';

import AOS from 'aos';

import { FaRegFile, FaRegEnvelope } from 'react-icons/fa';

// == Composants
import Head from '../components/Head';
import AbFooter from '../components/AbFooter';

import 'aos/dist/aos.css';

// == Données au format JSON
import data from '../data/data.json';


// == SCSS
import './404.scss';




const ErrorPage = ({ location }) => {
  const { title, content } = data.profil;
  
  const titleSplit = title.split('|');
  const split = content.split('|');
  const locaSplit = location.pathname.split('/');
  console.log(locaSplit);

  const [hello, name] = titleSplit;

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