import styled from 'styled-components'
import media from "styled-media-query"
import Img from 'gatsby-image'

export const AvatarWrapper = styled(Img)`
  border-radius: 50%;
  height: 160px;
  margin: auto;
  width: 160px;
  
  ${media.lessThan("large")`
    height: 1.875rem;
    width: 1.875rem;
  `}
`