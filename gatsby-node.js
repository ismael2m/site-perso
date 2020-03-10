// path est un module intégré à Node.js qui permet d'appliquer des actions sur les chemins
const path = require('path');

module.exports.onCreateNode = ({ node, actions }) => {
  const { createNodeField } = actions;

  if (node.internal.type === 'MarkdownRemark') {
    const slug = path.basename(node.fileAbsolutePath, '.md');

    createNodeField({
      node,
      name: 'slug',
      value: slug,
    });
  }
};


module.exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  const pageTemplate = path.resolve('./src/components/templates/pageTemplate.js');
  const res = await graphql(`
    query {
        allMarkdownRemark {
            edges {
                node {
                    fields {
                        slug
                    }
                }
            }
        }
    }
  `);

  res.data.allMarkdownRemark.edges.forEach((edge) => {
    createPage({
      component: pageTemplate,
      path: `/${edge.node.fields.slug}`,
      context: {
        slug: edge.node.fields.slug,
      },
    });
  });
};
