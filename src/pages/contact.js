import React from 'react'
import Layout from '../components/Layout'
import { graphql, StaticQuery } from 'gatsby'
import StyledHero from '../components/StyledHero'

export default function contact({ data }) {
  return (
    <Layout>
      <StyledHero img={data.contactBcg.childImageSharp.fluid} />
      Hallo from contact, Rosetten!
    </Layout>
  )
}

export const query = graphql`
  query {
    contactBcg: file(relativePath: { eq: "connectBcg.jpeg" }) {
      childImageSharp {
        fluid(quality: 90, maxWidth: 4160) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`
