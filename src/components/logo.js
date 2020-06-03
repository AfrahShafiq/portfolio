import React from "react"
import { Link } from "gatsby"

const Logo = (props) => (
  <div className="site-logo crux">
    <Link to="/">{props.title}</Link>
  </div>
)

export default Logo