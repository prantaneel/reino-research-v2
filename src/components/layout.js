import * as React from "react"
import { Link } from "gatsby"

const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  const isRootPath = location.pathname === rootPath
  let header

  if (isRootPath) {
    header = (
      <div className="blog-nav">
        <div className="main-heading-container">
          <h1 className="main-heading">
            <Link to="/">{title}</Link>
          </h1>
          {"research"}
        </div>
        <div>
          <Link to="https://reino.netlify.app">Home</Link>
        </div>
      </div>
    )
  } else {
    header = (
      <div className="blog-nav">
        <div className="main-heading-container">
          <h1 className="main-heading">
            <Link to="/">{title}</Link>
          </h1>
          {"research"}
        </div>
        <div>
          <Link to="https://reino.netlify.app">Home</Link>
        </div>
      </div>
    )
  }

  return (
    <div className="global-wrapper" data-is-root-path={isRootPath}>
      <header className="global-header">{header}</header>
      <main>{children}</main>
      <footer>
        © {new Date().getFullYear()}, Copyright research of
        {` `}
        <a href="https://reino.netlify.app">Reino</a>
      </footer>
    </div>
  )
}

export default Layout
