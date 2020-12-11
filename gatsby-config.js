module.exports = {
  siteMetadata: {
    title: `Diresh Shrestha | Software Developer`,
    description: `Personal portfolio website of Diresh Shrestha.`,
    author: `@diresh`,
    siteUrl: `https://www.diresh.io/`,
    image: {
      src: "hero.webp",
      width: 600,
      height: 500,
    },
    social: {
      twitter: "https://twitter.com/diresheverest",
      github: "https://github.com/diresh-shrestha",
    },
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
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        // You can add multiple tracking ids and a pageview event will be fired for all of them.
        trackingIds: [
          "G-X1YD0WVKDS", // Google Analytics / GA
          "AW-CONVERSION_ID", // Google Ads / Adwords / AW
          "DC-FLOODIGHT_ID", // Marketing Platform advertising products (Display & Video 360, Search Ads 360, and Campaign Manager)
        ],
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
      resolve: `gatsby-plugin-scroll-reveal`,
      options: {
        threshold: 0.5, // Percentage of an element's area that needs to be visible to launch animation
        once: true, // Defines if animation needs to be launched once
        disable: false, // Flag for disabling animations

        // Advanced Options
        selector: "[data-sal]", // Selector of the elements to be animated
        animateClassName: "sal-animate", // Class name which triggers animation
        disabledClassName: "sal-disabled", // Class name which defines the disabled state
        rootMargin: "0% 50%", // Corresponds to root's bounding box margin
        enterEventName: "sal:in", // Enter event name
        exitEventName: "sal:out", // Exit event name
      },
    },
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: [`.mdx`, `.md`],
      },
    },
    {
      resolve: `gatsby-plugin-disqus`,
      options: {
        shortname: `diresh`,
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
