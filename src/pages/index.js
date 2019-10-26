import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/Layout'
import SimpleHero from '../components/SimpleHero'
import Banner from '../components/Banner'

export default () => (
  <Layout>
    <SimpleHero>
      <Banner
        title="Continue exploring"
        info=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, officiis."
      >
        <Link to="/tours" className="btn-white">
          Explore our tours
        </Link>
      </Banner>
    </SimpleHero>
  </Layout>
)
