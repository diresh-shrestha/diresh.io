const remarkSlug = require("remark-slug")

require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    title: `Diresh Shrestha`,
    description: `Personal portfolio website of Diresh Shrestha.`,
    author: `@diresh`,
    siteUrl: `https://www.diresh.io`,
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
    `gatsby-plugin-sitemap`,
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
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/static`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        // You can add multiple tracking ids and a pageview event will be fired for all of them.
        trackingIds: [
          process.env.GTAG_ID, // Google Analytics / GA
          "AW-CONVERSION_ID", // Google Ads / Adwords / AW
          "DC-FLOODIGHT_ID", // Marketing Platform advertising products (Display & Video 360, Search Ads 360, and Campaign Manager)
        ],
      },
    },
    // {
    //   resolve: "gatsby-source-goodreads",
    //   options: {
    //     developerKey: "n64tyIdRZf7Ymjj0rULGow",
    //     goodReadsUserId: "57923769-diresh-shrestha",
    //     userShelf: "currently-reading",
    //   },
    // },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images-medium-zoom`, // Important!
            options: {
              background: "#121212",
            },
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: [`.md`, `.mdx`],
        remarkPlugins: [remarkSlug],
        gatsbyRemarkPlugins: [
          // {
          //   resolve: `gatsby-remark-autolink-headers`,
          // },
          {
            resolve: `gatsby-remark-images-medium-zoom`, // Important!
            options: {
              background: "#121212",
            },
          },
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
              linkImagesToOriginal: false,
            },
          },
        ],
      },
    },
    // {
    //   resolve: `gatsby-source-twitter`,
    //   options: {
    //     credentials: {
    //       consumer_key: process.env.GATSBY_TWITTER_KEY,
    //       consumer_secret: process.env.GATSBY_TWITTER_SECRET_KEY,
    //       bearer_token: process.env.GATSBY_TWITTER_BEARER_TOKEN,
    //     },
    //     queries: {
    //       MyTweets: {
    //         endpoint: "statuses/user_timeline",
    //         params: {
    //           screen_name: "iamdiresh",
    //           include_rts: true,
    //           exclude_replies: true,
    //           tweet_mode: "extended",
    //         },
    //       },
    //     },
    //   },
    // },
    {
      resolve: "gatsby-plugin-hubspot",
      options: {
        trackingCode: process.env.HUBSPOT_TRACKING_CODE,
        respectDNT: true,
        productionOnly: false,
      },
    },
    {
      resolve: `gatsby-plugin-nprogress`,
      options: {
        // Setting a color is optional.

        // Disable the loading spinner.
        showSpinner: true,
      },
    },

    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,

    "gatsby-plugin-dark-mode",
    {
      resolve: "gatsby-plugin-mailchimp",
      options: {
        endpoint:
          "https://diresh.us1.list-manage.com/subscribe/post?u=13cbf60ec202401b61350a932&amp;id=1033f5794a",
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
        duration: 500,
      },
    },
    // `gatsby-plugin-postcss`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Diresh.io`,
        short_name: `Diresh`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/hero.jpg`,
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    `gatsby-plugin-offline`,
  ],
}
