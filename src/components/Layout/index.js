import React from "react"
import PropTypes from "prop-types"
import Profile from "../Profile"

import style from 'styled-components'
import GlobalStyles from '../../styles/global'

const LayoutWrapper = style.section`
  display: flex;
`

const LayoutMain = style.main`
  background: #16202c;
  min-height: 100vh;
  padding: 0 3.75rem 0 20rem;
  width: 100%;
`

const Layout = ({ children }) => {

  return (
    <LayoutWrapper>
      <GlobalStyles />
      <aside>
        <Profile />
      </aside>
      <LayoutMain>{children}</LayoutMain>
    </LayoutWrapper>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
