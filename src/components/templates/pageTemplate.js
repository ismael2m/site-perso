import React from 'react';
import { graphql } from 'gatsby';

// == PropTypes
import PropTypes from 'prop-types';

// == Composants
import OneProject from '../OneProject';
import Profile from '../Profile';

// == Scss
import './project.scss';

// == Requête GraphQL
export const query = graphql`
query($slug: String!) {
  markdownRemark (fields: { slug: { eq: $slug }}){
    frontmatter {
      title
      name
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

const PageTemplate = (props) => {
  const { data } = props;
  const { markdownRemark } = data;
  const { frontmatter } = markdownRemark;
  const {
    title, site, role, technos, name, featuredImage,
  } = frontmatter;
  const { publicURL } = featuredImage;

  const { html } = markdownRemark;
  const { path } = props;

  if (path === '/profil') {
    return <Profile path={path} title={title} name={name} html={html} />;
  }

  return (
    <OneProject
      path={path}
      publicURL={publicURL}
      title={title}
      site={site}
      role={role}
      technos={technos}
      name={name}
      html={html}
    />
  );
};

// == PropTypes
PageTemplate.propTypes = {
  data: PropTypes.shape().isRequired,
  path: PropTypes.string.isRequired,
};

export default PageTemplate;
