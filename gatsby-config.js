/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `Clément Lapasset - Portfolio`,
    siteUrl: `https://portfolioclementlapassetmain.gatsbyjs.io/`
  },
  plugins: [
    "gatsby-plugin-mdx", {
      resolve: 'gatsby-source-filesystem',
      options: {
        "name": "pages",
        "path": "./src/pages/"
      },
      __key: "pages"
    },
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
  ]
};
