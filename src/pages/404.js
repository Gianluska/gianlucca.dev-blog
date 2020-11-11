import React from "react"

import Layout from "../components/Layout"
import SEO from "../components/seo"

import travoltaGif from '../images/travolta.gif'

import * as S from '../components/404/styled'

const NotFoundPage = () => {

  return <Layout>
    <SEO title="404: Not found" />
    <S.NotFountWrapper>
      <S.NotFoundTitle>404</S.NotFoundTitle>
      <S.NotFoundText>Opa, parece que você se perdeu! :|</S.NotFoundText>
      <S.gifWrapper>
        <S.TravoltaGif src={travoltaGif} />
      </S.gifWrapper>
    </S.NotFountWrapper>
  </Layout>
}

export default NotFoundPage
