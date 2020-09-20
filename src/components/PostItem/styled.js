import styled from "styled-components"
import media from "styled-media-query"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import { CalendarAlt } from "@styled-icons/boxicons-regular/CalendarAlt"
import { WatchLater } from "@styled-icons/material-outlined/WatchLater"

export const PostItemLink = styled(AniLink)`
  color: var(--texts);
  display: flex;
  text-decoration: none;
  &:hover {
    color: var(--highlight);
  }

  body#grid & {
    background-color: var(--background);
  }
`

export const PostItemWrapper = styled.section`
  align-items: center;
  display: flex;
  padding: 2rem 3rem;
  width: 100%;

  body#grid & {
    border: none;
    padding: 2rem 1rem;
    flex-direction: column;
    justify-content: flex-start;
  }

  ${media.lessThan("large")`
    align-items: flex-start;
    flex-direction: column;
    padding: 2rem 1rem;
  `}
`

export const PostItemTag = styled.div`
  font-family: 'Cardo', serif;
  align-items: center;
  background: ${props =>
    props.background ? props.background : "var(--highlight)"};
  border-radius: 50%;
  color: var(--black);
  display: flex;
  font-size: 32px;
  font-weight: 700;
  justify-content: center;
  min-height: 120px;
  min-width: 120px;
  text-transform: uppercase;

  body#grid & {
    margin-bottom: 1.5rem;
  }

  ${media.lessThan("large")`
    border-radius: 0;
    font-size: 1rem;
    min-height: auto;
    min-width: auto;
    padding: .2rem .5rem;
    margin-bottom: .7rem;
  `}
`

export const PostItemInfo = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 1.5rem;

  body#grid & {
    text-align: center;
    margin-left: unset;
  }

  ${media.lessThan("large")`
    margin: 0;
  `}
`

export const PostItemDate = styled.time`
  font-size: 0.9rem;
  display: flex;
`

export const CalendarIcon = styled(CalendarAlt)`
  width: 16px;
  margin-right: 4px;
`

export const TimerIcon = styled(WatchLater)`
  width: 16px;
  margin: 0px 4px 0px 12px;
`

export const PostItemTitle = styled.h1`
  font-family: 'Cardo', serif;
  font-size: 32px;
  font-weight: 700;
  margin: 0.2rem 0 0.5rem;

  body#grid & {
    line-height: 1.1;
    margin: 0.8rem 0;
  }
`

export const PostItemDescription = styled.p`
  font-size: 1.2rem;
  font-weight: 300;
  line-height: 1.2;
  margin-top: 16px;
`
