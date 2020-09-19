import React from "react"
import { Link, graphql } from "gatsby"
import { RiArrowRightLine, RiArrowLeftLine } from "react-icons/ri"

import Layout from "../components/layout"
import SEO from '../components/seo';

const Pagination = (props) => (
  <div className="pagination -post">
    <ul>
        {(props.previous && props.previous.frontmatter.template === 'blog-post') && (
          <li>
              <Link to={props.previous.frontmatter.slug} rel="prev">
                <p><span className="icon -left"><RiArrowLeftLine/></span> Previous</p>
                <span className="page-title">{props.previous.frontmatter.title}</span>
              </Link>
          </li>
        )}
        {(props.next && props.next.frontmatter.template === 'blog-post') && (
          <li>
            <Link to={props.next.frontmatter.slug} rel="next">
              <p>Next <span className="icon -right"><RiArrowRightLine/></span></p>
              <span className="page-title">{props.next.frontmatter.title}</span>
            </Link>
          </li>
        )}
    </ul>
  </div>
)

const Post = ({ data, pageContext }) => {
  const { markdownRemark } = data // data.markdownRemark holds your post data
  const { frontmatter, html, excerpt } = markdownRemark
  const { previous, next } = pageContext

  let props = {
    previous,
    next
  }

  return (
    <Layout className="page">
      <SEO
        title={frontmatter.title}
        description={frontmatter.description ? frontmatter.description : excerpt}
        image={frontmatter.featuredImage.childImageSharp}
        article={true}
      />
      <article className="blog-post">
        <header className="featured-banner">
          <section className="article-header">
            <h1>{frontmatter.title}</h1>
          </section>
          {/* {Image ? (
            <Img 
              fluid={Image} 
              objectFit="cover"
              objectPosition="50% 50%"
              alt={frontmatter.title + ' - Featured image'}
              className="featured-image"
            />
          ) : ""} */}
          {/* {!!frontmatter.featuredImage && !!frontmatter.featuredImage.childImageSharp ? 
            (
                <Img 
                  fluid={frontmatter.featuredImage[0].childImageSharp.fluid} 
                  objectFit="cover"
                  objectPosition="50% 50%"
                  alt={frontmatter.title + ' - Featured image'}
                />
            ) : 
                <img
                  src={frontmatter.featuredImage[0].publicURL} 
                  alt={frontmatter.title + ' - Featured image'}
                  objectFit="cover"
                  objectPosition="50% 50%"
                />
          } */}
        </header>
        
        <div
          className="blog-post-content"
          dangerouslySetInnerHTML={{ __html: html }}
        />
      </article>
      {(previous || next) && (
        <Pagination {...props} />
      )}
    </Layout>
  )
}

export default Post

export const pageQuery = graphql`
  query BlogPostQuery($id: String!) {
    markdownRemark( 
      id: { eq: $id }
    ) {
      id
      html
      excerpt(pruneLength: 148)
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        slug
        title
        description
        featuredImage {
          image {
            childImageSharp {
              fluid(maxWidth: 500, maxHeight: 436, quality: 80) {
                ...GatsbyImageSharpFluid
                ...GatsbyImageSharpFluidLimitPresentationSize
              }
            }
            publicURL
          }
          caption
        }
      }
    }
  }
`