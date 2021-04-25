/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import profilePic from "../assets/profile-pic.png"

const Bio = () => {
  const data = useStaticQuery(graphql`
    query BioQuery {
      site {
        siteMetadata {
          author {
            name
            summary
          }
          social {
            twitter
          }
        }
      }
    }
  `)

  // Set these values by editing "siteMetadata" in gatsby-config.js
  const author = data.site.siteMetadata?.author
  const social = data.site.siteMetadata?.social

  return (
    <div className="bio">
      <img
        src={profilePic}
        width={50}
        height={50}
        alt="Profile picture"
        style={{
          marginRight: "1rem",
          marginBottom: 0,
          width: "4rem",
          height: "4rem",
          borderRadius: "50%",
        }}
      />
      {author?.name && (
        <p>
          Written by <strong>{author.name}</strong>. {author?.summary || null}
          {` `}
          <a href={`https://twitter.com/${social?.twitter || ``}`}>Twitter</a>
        </p>
      )}
    </div>
  )
}

export default Bio
