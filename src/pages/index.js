import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <div>
    <Layout>
      <div className='Hero'>
        <div className="HeroGroup">
          <h1>Code With Jon</h1>
          <p>Welcome to Jons React site.</p>
          <p>Now let's build something great.</p>
          <Link to="/page-2/">Go to page 2</Link>
        </div>
      </div>
    </Layout>
  </div>
);

export default IndexPage
