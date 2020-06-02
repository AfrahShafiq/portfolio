import React from "react"
import Layout from "../components/layout"
import BlogListFilm from "../components/blog-list-film"
import SEO from "../components/seo"

const FilmPage = () => {
	return (
      <Layout banner="filmBanner">
        <SEO/>
        <p>This is film page.</p>
        <BlogListFilm/>
      </Layout>
	)
}

export default FilmPage
