---
title: "Git Hooks com Husky: entendendo, configurando e aplicando."
description: Neste post abordarei as funcionalidades do Husky, um biblioteca de
  Git Hooks que sou fã de carteirinha.
date: 2020-11-18 11:43:27
thumbnail: /assets/img/githusky.png
category: dev
background: "#637a91"
---
# Introdução

Fala galerinha, tudo joia? Post novo quentinho para vocês, e dessa vez sobre o meu amado Husky (estou animado em finalmente lançar um post sobre Git Hooks por aqui, hehehe). Bora lá?

# Git Hooks?

> Mas Gian, do que se trata?

Pois bem jovem padawan, Git Hooks são scripts predeterminados que executam automaticamente toda vez que você realiza uma ação em particular no seu repositório Git.

Você pode adicionar triggers customizados e mudar o comportamento interno do Git para aceitar certa ação apenas se o script definido anteriormente rodar sem nenhum erro. Mágico né?

# Husky

o que o Husky faz é criar Git Hooks em ambientes Node/npm de uma maneira super fácil! Sério, melzinho na chupeta!\
\
Primeiro vamos instalar a lib:

```powershell
$ npm install husky --save-dev
```

Após instalado, podemos ir até o arquivo `package.json` onde esta localizado a parte de scripts e adicionar seus hooks customizados, se liga no exemplo:

```json
// package.json
{
  "husky": {
    "hooks": {
      "pre-commit": "npm test",
      "pre-push": "npm test"
    }
  }
}
```

```powershell
$ git commit -m 'Keep calm and commit'
```

O que nós criamos foram duas configurações que rodam o script `npm test` toda vez que executarmos um commit ou push, só liberando o comando caso o script execute sem nenhum erro. Então não tem mais mais desculpas para subir código quebrado, né? Hehe.

# Conclusão

Então é isto por hoje meus caros, post bem rápido e simples. Espero que tenham curtido o conteúdo, até porque depois que eu descobri essa ferramenta nunca mais parei de usar, haha. Fala sério, que coisa útil! \
\
Lembrando: fique a vontade para usar a área de comentários! 

Nos vemos semana que vem! :D