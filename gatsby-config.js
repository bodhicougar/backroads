/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    title: 'BackRoads',
    desription:
      'Explore very cool worldwide tours & discover what make each of them unique. Forget your daily routine & and say yes! to adventure',
    author: '@bodhicougar',
    data: ['item1', 'item2'],
  },
  plugins: [`gatsby-plugin-sass`, `gatsby-plugin-styled-components`],
}
