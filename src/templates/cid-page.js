import React from "react"
import Layout from "../components/layout"
import BlogListHome from "../components/blog-list-home"
import SEO from "../components/seo"

const CidPage = () => {
	return (
      <Layout banner="cidBanner">
        <SEO/>
        <p>This is cid page.</p>
        <BlogListHome/>
      </Layout>
	)
}

export default CidPage
