module.exports = {
  siteMetadata: {
    title: 'Available Programs',
    author: 'Syed Muhammed Bilal',
    rights: '© 2019 PIAIC. All rights reserved.',
    powered: 'Powered by',
    howitwork : 'How It Work',
    about: 'About',
    avail: 'Available Programs',
    apply: 'Apply',
    wit: 'WIT'
  },
  plugins: [
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `5s1vwhzvvgqc`,
        // Learn about environment variables: https://gatsby.dev/env-vars
        accessToken: `IySnTJiq9c3_Wbl-Oytwl-urktu4dJ1gjuwWUKQ6nWk`,
      },
    },
    `gatsby-plugin-sass`,
    `@contentful/gatsby-transformer-contentful-richtext`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: 'src',
        path: `${__dirname}/src/`
      }
    },
    'gatsby-transformer-remark'
  ],
}

