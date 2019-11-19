import React, { Component } from 'react'
import { Link } from 'gatsby'
import Layout from '../components/Layout'
import Header from '../examples/RegularHeader'
import { graphql, StaticQuery } from 'gatsby'
import StyledHero from '../components/StyledHero'

export default class tours extends Component {
  render() {
    return (
      <Layout>
        <StyledHero img={this.props.data.defaultBcg.childImageSharp.fluid} />
        Hallo from tours page! <Link to="/">Back home</Link>
        <Header />
      </Layout>
    )
  }
}

export const query = graphql`
  query {
    defaultBcg: file(relativePath: { eq: "defaultBcg.jpeg" }) {
      childImageSharp {
        fluid(quality: 90, maxWidth: 4160) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`
