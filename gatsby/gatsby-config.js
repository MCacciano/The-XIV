module.exports = {
  siteMetadata: {
    title: "LFRaid",
  },
  plugins: [
    {
      resolve: "gatsby-source-graphql",
      options: {
        typeName: "XIVAPI",
        fieldName: "xivapi",
        url: "http://localhost:5000",
      },
    },
    "gatsby-plugin-styled-components",
  ],
}
