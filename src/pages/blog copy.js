import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/Layout'
import { graphql } from 'gatsby'

const blog = ({ data }) => {
  return (
    <Layout>
      Hello from blog page: <Link to="/">Zurück.</Link>
      <h1>Title: {data.site.siteMetadata.title}</h1>
    </Layout>
  )
}

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
        desription
        author
        data {
          age
        }
      }
    }
  }
`

export default blog
