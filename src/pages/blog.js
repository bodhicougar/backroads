import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/Layout'
import { graphql, StaticQuery } from 'gatsby'
import StyledHero from '../components/StyledHero'

const blog = ({ data }) => {
  return (
    <Layout>
      <StyledHero img={data.blogBcg.childImageSharp.fluid} />
      Hello from blog page: <Link to="/">Back home</Link>
    </Layout>
  )
}

export const query = graphql`
  query {
    blogBcg: file(relativePath: { eq: "blogBcg.jpeg" }) {
      childImageSharp {
        fluid(quality: 90, maxWidth: 4160) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`

export default blog
