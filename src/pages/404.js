import React from 'react'
import Layout from '../components/Layout'
import styles from '../css/error.module.css'
import { Link } from 'gatsby'
import Banner from '../components/Banner'

export default function error() {
  return (
    <Layout>
      <header className={styles.error}>
        <Banner title="Einbahnstrasse: Ein Fehler ist aufgetreten!">
          <Link to="/" className="btn-white">
            Zurück zur Startseite.
          </Link>
        </Banner>
      </header>
    </Layout>
  )
}
