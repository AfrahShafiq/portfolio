import React from "react"
import { Link } from "gatsby"
import Img from "gatsby-image"

const PostCard = ({ data, thumbnail }) => (
  <article className="post-card">
        {
          //console.log(thumbnail)
          //console.log(data)
        /* {!!image && !!image.childImageSharp
          ? <Img fluid={image.childImageSharp.fluid}
                 alt={title}
            />
          : <img src={image.publicURL}
                 alt={title} 
           />
        } */}             
            
    {!!thumbnail.image && !!thumbnail.image.childImageSharp ? 
      (
        <Link to={data.frontmatter.slug}>
                    <div class="overlay">
            <div class="overlaytext">{thumbnail.caption}</div>
          </div> 
          <Img 
            fluid={thumbnail.image.childImageSharp.fluid} 
            objectFit="fill"
            objectPosition="50% 50%"
            alt={data.frontmatter.title + ' - Featured image'}
          />
        </Link>
      ) : <Link to={data.frontmatter.slug}>
          <div class="overlay">
            <div class="overlaytext">{thumbnail.caption}</div>
          </div> 
          <img
            src={thumbnail.image.publicURL} 
            alt={data.frontmatter.title + ' - Featured image'}
            objectFit="fill"
            objectPosition="50% 50%"
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