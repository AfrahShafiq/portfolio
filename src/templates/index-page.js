import React from "react"
import Layout from "../components/layout"
import BlogListHome from "../components/blog-list-home"
import SEO from "../components/seo"

const HomePage = () => {
	return (
      <Layout banner="homeBanner">
        <SEO/>
        <BlogListHome/>
      </Layout>
	)
}

export default HomePage
