import React from 'react'
import { StaticQuery, graphql } from 'gatsby'

const getSiteData = graphql`
  query FirstQuery {
    site(siteMetadata: { author: {}, data: {}, desription: {} }) {
      siteMetadata {
        title
        desription
        author
      }
    }
  }
`

const RegularHeader = () => {
  return (
    <StaticQuery
      query={getSiteData}
      render={data => {
        return <h1>Hello people!</h1>
      }}
    />
  )
}

export default RegularHeader
