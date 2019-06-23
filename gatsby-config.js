module.exports = {
  siteMetadata: {
    title: `Portfolio Site`,
    description: `Initial work for a portfolio site w/ Gatsby.js`,
    author: `@gatsbyjs`
  },
  pathPrefix: "/gatsby-portfolio",
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-graphql`,
      options: {
        typeName: "GitHub",
        fieldName: "github",
        // Url to query from
        url: "https://api.github.com/graphql",
        // HTTP headers
        headers: {
          Authorization: `bearer ${process.env.GITHUB_API_TOKEN}`,
        }
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-typescript`,
    `gatsby-plugin-sass`
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.app/offline
    // 'gatsby-plugin-offline',
  ],
}
