import React from "react"
import { Link } from "gatsby"
import Img from "gatsby-image"

const PostCard = ({ data }) => (
  <article className="post-card">
        {
          console.log(data)
        /* {!!image && !!image.childImageSharp
          ? <Img fluid={image.childImageSharp.fluid}
                 alt={title}
            />
          : <img src={image.publicURL}
                 alt={title} 
           />
        } */}
    {!!data.frontmatter.featuredImage && !!data.frontmatter.featuredImage.childImageSharp ? 
      (
        <Link to={data.frontmatter.slug}>
          <Img 
            fluid={data.frontmatter.featuredImage.childImageSharp.fluid} 
            objectFit="cover"
            objectPosition="50% 50%"
            alt={data.frontmatter.title + ' - Featured image'}
          />
        </Link>
      ) : <Link to={data.frontmatter.slug}>
          <img
            src={data.frontmatter.featuredImage.publicURL} 
            objectFit="cover"
            objectPosition="50% 50%"
            alt={data.frontmatter.title + ' - Featured image'}
          />
        </Link>
    }
    {/* <div class="post-content">
      <h2 className="title"><Link to={data.frontmatter.slug}>{data.frontmatter.title}</Link></h2>
      <p className="meta"><time>{data.frontmatter.date}</time></p>
    </div> */}
  </article>
)

export default PostCard