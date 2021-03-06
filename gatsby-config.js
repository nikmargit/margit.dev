module.exports = {
  plugins: [
    {
      resolve: `gatsby-theme-blog`,
      options: {},
    },
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-favicon",
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-155134388-1",
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
            },
          },
          "gatsby-remark-autolink-headers",
        ],
      },
    },
  ],
  // Customize your site metadata:
  siteMetadata: {
    title: `Nikola Margit`,
    author: `Nikola Margit`,
    description: `I'm Nikola Margit, a full-stack JavaScript developer.`,
    social: [
      {
        name: `twitter`,
        url: `https://twitter.com/nikolamargit`,
      },
      {
        name: `github`,
        url: `https://github.com/nikmargit`,
      },
    ],
  },
}
