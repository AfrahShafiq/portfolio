import React from "react"
import Layout from "../components/layout"
import BlogListHome from "../components/blog-list-home"
import SEO from "../components/seo"

const ArtPage = () => {
	return (
      <Layout banner="artBanner">
        <SEO/>
        <p>This is home page.</p>
        <BlogListHome/>
      </Layout>
	)
}

export default ArtPage
