import React from "react"
import Layout from "../components/layout"
import BlogListArt from "../components/blog-list-art"
import SEO from "../components/seo"

const ArtPage = () => {
	return (
      <Layout banner="artBanner">
        <SEO/>
        <p>This is home page.</p>
        <BlogListArt/>
      </Layout>
	)
}

export default ArtPage
