module.exports = {
  siteMetadata: {
    title: `Personal Website | Diresh Shrestha`,
    description: `Diresh Shrestha's Personal Website`,
    author: `@diresh`,
  },
  plugins: [
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/content/`,
      },
    },
    {
      resolve: "gatsby-source-goodreads",
      options: {
        developerKey: "n64tyIdRZf7Ymjj0rULGow",
        goodReadsUserId: "57923769-diresh-shrestha",
      },
    },

    `gatsby-transformer-remark`,
    `gatsby-plugin-scroll-reveal`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    "gatsby-theme-elements",
    "gatsby-plugin-dark-mode",
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: [`.mdx`, `.md`],
      },
    },
    {
      resolve: "gatsby-plugin-anchor-links",
      options: {
        offset: -100,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
