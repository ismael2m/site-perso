import React from 'react';
import { graphql } from 'gatsby';


// == Composants
import OneProject from '../OneProject';
import Profile from '../Profile';

// == Scss
import './project.scss';

export const query = graphql`
query($slug: String!) {
  markdownRemark (fields: { slug: { eq: $slug }}){
    frontmatter {
      title
      name
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


const PageTemplate = (props) => {
  const {
    title, subtitle, site, role, technos, name,
  } = props.data.markdownRemark.frontmatter;

  const { html } = props.data.markdownRemark;
  const { path } = props;

  if (path === '/profil') {
    return <Profile path={path} title={title} name={name} html={html} />;
  }

  const { publicURL } = props.data.markdownRemark.frontmatter.featuredImage;

  return (
    <OneProject
      path={path}
      publicURL={publicURL}
      title={title}
      subtitle={subtitle}
      site={site}
      role={role}
      technos={technos}
      name={name}
      html={html}
    />
  );
};
export default PageTemplate;
