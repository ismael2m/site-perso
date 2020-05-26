/* eslint-disable react/no-danger */
import React from 'react';
import { Link } from 'gatsby';

// == PropTypes
import PropTypes from 'prop-types';

// == Fonctions utilitaires
import dangerHtml from '../../functions/dangerHtml';

// == Composants
import AbFooter from '../AbFooter';
import Head from '../Head';


const OneProject = ({
  path, publicURL, title, subtitle, site, html, role, technos,
}) => (
  <>
    <Head title={path} />
    <div className="project">
      <img src={publicURL} alt={title} className="project-img" />
      <h1 className="project-title">{title}</h1>
      <h2 className="project-subtitle">{subtitle}</h2>
      <p dangerouslySetInnerHTML={dangerHtml(html)} className="project-content" />
      <span className="project-infos">Site web</span>
      <a href={site} target="_blank" rel="noopener noreferrer" className="project-role">
        {site}
      </a>
      <span className="project-infos">Rôle</span>
      <p className="project-role">{role}</p>
      <span className="project-infos">Technologies utilisées</span>
      <p className="project-role">{technos}</p>
      <Link to="/">
        <button type="button" className="project-btn">
          Retour
        </button>
      </Link>
    </div>
    <AbFooter />
  </>
);

// == PropTypes
OneProject.propTypes = {
  path: PropTypes.string.isRequired,
  publicURL: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  site: PropTypes.string.isRequired,
  html: PropTypes.string.isRequired,
  role: PropTypes.string.isRequired,
  technos: PropTypes.string.isRequired,
};

export default OneProject;
