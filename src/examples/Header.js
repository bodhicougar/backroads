import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

const getSiteData = graphql`
  query SecondQuery {
    site(siteMetadata: {}, port: {}, parent: { children: {}, id: {} }) {
      siteMetadata {
        title
        desription
        author
      }
    }
  }
`

const Header = () => {
  const data = useStaticQuery(getSiteData)
  return (
    <div>
      <h1>Title: {data.site.siteMetadata.title} </h1>
      <h1>Author: {data.site.siteMetadata.author}</h1>
    </div>
  )
}

export default Header
