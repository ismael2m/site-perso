/** yarnadd
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */

  siteMetadata: {
    title: 'Ismaël Mmadi',
    siteUrl: 'https://www.ismaelmmadi-dev.com',
    description: 'Portfolio',
  },

  plugins: [
    'gatsby-plugin-sass',
    'gatsby-plugin-smoothscroll',
    'gatsby-plugin-layout',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sharp',
    'gatsby-transformer-remark',
    'gatsby-transformer-sharp',

    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'src',
        path: `${__dirname}/src/`,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'static',
        path: `${__dirname}/static/img`,
      },
    },
    {
      resolve: 'gatsby-plugin-google-fonts',
      options: {
        fonts: [
          'limelight',
          'source sans pro:300,400,400i,700', // you can also specify font weights and styles
        ],
        display: 'swap',
      },
    },
    {
      resolve: 'gatsby-plugin-google-fonts',
      options: {
        fonts: [
          'limelight',
          'source sans pro:300,400,400i,700', // you can also specify font weights and styles
          'Roboto:300,400,500,700',
        ],
        display: 'swap',
      },
    },
  ],
};
