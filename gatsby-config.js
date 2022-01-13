module.exports = {
  siteMetadata: {
    title: `HyoungWook Jin`,
    description: `Hyoungwook Jin is a programmer who considers code architecture for better developer experience and is also a human computer interaction researcher who is intertested in crowdsourcing and education.`,
    author: `HyoungWook Jin`,
    mainImg: ``,
    contacts: {
      email: 'mailto:jinhw@kaist.ac.kr',
      facebook: 'https://www.facebook.com/jin.hyoungwook',
      github: 'https://github.com/jhw123',
      linkedin: 'https://www.linkedin.com/in/hyoungwook-jin-619b5b10a',
    },
    keywords: [
      '진형욱',
      'Hyoungwook Jin',
      '카이스트',
      'KAIST',
      'SolveDeep',
      'Learnersourcing',
      'KIXLAB',
    ],
  },
  plugins: [
    `gatsby-plugin-typescript`,
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-prismjs`,
            options: {
              classPrefix: 'language-',
              inlineCodeMarker: null,
              aliases: {
                typescriptjsx: 'jsx',
              },
              showLineNumbers: true,
              noInlineHighlight: false,
            },
          },
        ],
      },
    },
    `gatsby-plugin-emotion`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/`,
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
        background_color: `#02b1cc`,
        theme_color: `#02b1cc`,
        display: `minimal-ui`,
        icon: `static/icons/favicon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        trackingIds: [
          'G-9WF73KYX2M', // Google Analytics / GA
        ],
        gtagConfig: {
          anonymize_ip: true,
          cookie_expires: 0,
        },
        pluginConfig: {
          head: false, // Puts tracking script in the head instead of the body
          respectDNT: true, // Setting this parameter is also optional
          exclude: [], // Avoids sending pageview hits from custom paths
        },
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
