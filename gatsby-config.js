module.exports = {
  siteMetadata: {
    title: `진형욱 블로그`,
    description: `좋은 코드 패턴과 구조를 통해 개발자 경험 (DX) 개선을 고민하는 개발자이자, 크라우드 소싱 시스템과 교육에 관심있는 HCI 연구자입니다.`,
    author: `진형욱`,
    mainImg: ``,
    contacts: {
      email: 'mailto:jinhw@kaist.ac.kr',
      facebook: 'https://www.facebook.com/jin.hyoungwook',
      github: 'https://github.com/jhw123',
      linkedin: 'https://www.linkedin.com/in/형욱-진-619b5b10a',
    },
    keywords: ['진형욱', 'Hyoungwook Jin', '카이스트', 'KAIST'],
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
          {
            resolve: `gatsby-remark-figure-caption`,
            options: { figureClassName: 'md-figure' },
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
        icon: `src/icons/favicon.png`, // This path is relative to the root of the site.
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
