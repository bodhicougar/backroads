import React, { Component } from 'react'
import { Link } from 'gatsby'
import Layout from '../components/Layout'
import Header from '../examples/RegularHeader'

export default class tours extends Component {
  render() {
    return (
      <Layout>
        Hallo from tours page! <Link to="/">Back home</Link>
        <Header />
      </Layout>
    )
  }
}
