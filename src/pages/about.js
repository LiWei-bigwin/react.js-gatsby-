import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import MyLogo from "../../assets/fullstack-logo.png"
const SecondPage = () => (
  <Layout>
    <SEO title="about" />
    <h1>Hi from the home page</h1>
    <p>Welcome to About us</p>
    <div className="show-container">
    <img src={MyLogo} className="logo-image" />
    <Link to="/">Go back to the homepage</Link>
    </div>
    
  </Layout>
)

export default SecondPage
