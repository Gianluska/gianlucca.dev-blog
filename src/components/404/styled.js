import styled from "styled-components"
import media from "styled-media-query"

export const NotFountWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  color: var(--texts);
  text-align: center;
  ${media.lessThan("large")`
    height: calc(100vh - 120px);
  `}
`

export const gifWrapper = styled.div`
  position: absolute;
  left: 50%;
  height: 90%;
  bottom: 0;
  ${media.lessThan("medium")`
    height:70%;
  `}
  ${media.lessThan("small")`
    height:50%;
  `}
`

export const TravoltaGif = styled.img`
  width: auto;
  opacity: 0.2;
  filter: grayscale(1);
  height: 100%;
  position: relative;
  left: -50%;
`

export const NotFoundTitle = styled.h1`
  font-size: 260px;
  font-weight: bold;
  ${media.lessThan("medium")`
    font-size: 180px;
  `}
  ${media.lessThan("small")`
    font-size: 120px;
  `}
`

export const NotFoundText = styled.p`
  font-size: 24px;
  ${media.lessThan("medium")`
    font-size: 20px;
  `}
  ${media.lessThan("small")`
    font-size: 16px;
  `}
`
