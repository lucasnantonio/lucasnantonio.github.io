/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import { AnimateSharedLayout } from "framer-motion"
import { graphql, useStaticQuery } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import "../../node_modules/tachyons/css/tachyons.min.css"
import Footer from "./footer"
import Header from "./header"
import "./layout.css"

const Layout = ({ location, children, isIndex }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)
  return (
    <>
      <Header
        location={location.pathname}
        siteTitle={data.site.siteMetadata.title}
        isIndex={isIndex}
      />
      <div
        className="pt0 ph0"
        style={{
          margin: `0 auto`,
          paddingTop: 0,
        }}
      >
        <main>{children}</main>
      </div>
      <Footer></Footer>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
