import React from "react"
import Layout from "../components/layout"
import BlogListHome from "../components/blog-list-home"
import SEO from "../components/seo"

const WorkshopsPage = () => {
	return (
      <Layout banner="workshopsBanner">
        <SEO/>
        <p>This is teachings & Workshops page.</p>
        <BlogListHome/>
      </Layout>
	)
}

export default WorkshopsPage
