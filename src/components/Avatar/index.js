import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import * as S from "./styled"

const Avatar = () => {
  const { avatarImage } = useStaticQuery(
    graphql`
      query {
        avatarImage: file(relativePath: { eq: "profile-photo.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 260) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `
  )
  return <S.AvatarWrapper fluid={avatarImage.childImageSharp.fluid} />
}

export default Avatar
