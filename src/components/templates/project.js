import React from 'react';
import { graphql, Link } from 'gatsby';
import dangerHtml from '../../functions/dangerHtml';

// == Composants
import AbFooter from '../AbFooter';
import Head from '../Head';

// == Scss
import './project.scss';

export const query = graphql`
query($slug: String!) {
  markdownRemark (fields: { slug: { eq: $slug }}){
    frontmatter {
      title
      subtitle
      site
      role
      technos
      featuredImage {
        publicURL
      }
    }
    html
  }
}
`;


const Project = (props) => {
  const {
    title, subtitle, site, role, technos, featuredImage,
  } = props.data.markdownRemark.frontmatter;

  const { html } = props.data.markdownRemark;
  const { publicURL } = featuredImage;

  console.log(publicURL);
  return (
    <>
      <Head title={title} />
      <div className="project">
        <img src={publicURL} alt={title} className="project-img" />
        <h1 className="project-title">{title}</h1>
        <h2 className="project-subtitle">{subtitle}</h2>
        <a href={site} target="_blank" rel="noopener noreferrer" className="project-url">Site web</a>
        <span className="project-resume">Résumé du projet</span>
        <p dangerouslySetInnerHTML={dangerHtml(html)} className="project-content" />
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
};

export default Project;
