import React from "react"

import Layout from "../components/Layout"
import SEO from "../components/seo"
import SocialLinks from "../components/SocialLinks/index"

import * as S from "../components/Post/styled"

const AboutPage = () => {
  const skillsArray = [
    "HTML",
    "CSS (Sass)",
    "CSS Frameworks (Bootstrap, Materialize)",
    "Design Systems (Material Design)",
    "Responsividade | Mobile First",
    "SEO | WPO",
    "JavaScript",
    "TypeScript",
    "Design Patterns",
    "React | React Native | Redux",
    "GatsbyJS",
    "NextJS",
    "Angular 2+ | Ionic | RxJS",
    "Git (Git Flow)",
    "Scrum | Kanban",
    "TDD",
    "Continuous Integration",
    "GraphQL",
  ]
  const aboutMeText = `
  E aê, beleza? Me chamo Gian, tenho ${getAge() || '19'} anos, sou de Curitiba/PR e sou Desenvolvedor Front-End.
  Atualmente estou cursando Sistemas de Informação e a previsão para a conclusão é em 2021. Foi dentro do curso que conheci o universo do desenvolvimento web, e foi paixão a primeira vista.
  <br/>
  <br/>
  Sou fascinado por tecnologia, adoro trabalhar em equipe e venho de uma família de professores, então ta no sangue o meu amor por passar conhecimento adiante xD.
  `

  return (
    <Layout>
      <SEO title="About"></SEO>
      <S.MainContent>
        <S.PostTitle>Sobre mim</S.PostTitle>
        <p dangerouslySetInnerHTML={{ __html: aboutMeText }}></p>
        <S.PostDescription>Habilidades</S.PostDescription>
        <ul>
          {skillsArray.map(skill => (
            <li>{skill}</li>
          ))}
        </ul>
        <S.PostDescription>Contato</S.PostDescription>
        <p>Você pode usar qualquer uma das minhas redes sociais para entrar em contato comigo.</p>
        <SocialLinks />
      </S.MainContent>
    </Layout>
  )
}

function getAge() {
  const actualYear = new Date().getFullYear()
  const birthdateYear = 2001

  return actualYear - birthdateYear
}

export default AboutPage
