/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    title: 'BackRoads',
    desription:
      'Explore very cool Worldwide Tours & discover what make each of them unique. Forget your daily routine & and say yes! to adventure',
    author: '@bodhicougar',
    data: {
      name: 'Walti der Freibeuter',
      age: 55,
    },
  },
  plugins: [`gatsby-plugin-sass`, `gatsby-plugin-styled-components`],
}
