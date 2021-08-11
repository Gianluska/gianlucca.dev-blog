---
title: Minha implementação favorita de Timer no JavaScript puro!
description: Na minha opinião uma das melhores implementações de Timer
  utilizando JavaScript Vanilla!
date: 2021-08-11 01:01:12
thumbnail: /assets/img/countdown-timer.png
category: js
background: "#D6BA32"
---
# Introdução

Fala gurizada, beleza? Espero que sim!

Recentemente (durante meus estudos em [Electron.js](https://www.electronjs.org/)) me deparei com a necessidade de implementar um Countdown Timer e acabei vendo a implementação dessa funcionalidade no [canal do Mayk Brito](https://www.youtube.com/maykbrito) no YouTube. Achei simplesmente animal a abordagem dele e é claro que eu não deixaria passar essa oportunidade de post, hehe.

Bora lá?

# Iniciando projeto

Para iniciar o nosso projeto, vamos primeiro criar uma pasta no seu diretório de preferência:

![Pasta criada e vazia](/assets/img/screenshot_1.png "folder")

Após isso, já no editor de código (VSCode), vamos criar nossos primeiros arquivos:

* index.html
* style.css
* App.js

![Primeiros arquivos](/assets/img/firsts-files.png "firsts files")

Como você pode perceber, criei uma pasta chamada `src/` onde colocarei todos os nossos arquivos `.js`

Meu intuito nesse post não é abordar `HTML` e `CSS`, então vou pular esta parte da implementação e mostrar apenas o código final:

**`index.html`:**

```html
<!DOCTYPE html>
<html lang="pt-br">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Simple Timer</title>

  <link rel="preconnect" href="https://fonts.gstatic.com">
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;600&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="style.css">
</head>
<body>
  
</body>
</html>
```

**`style.css`:**

```css
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

:root {
  font-family: "Inter", sans-serif;
  font-size: 180%;
}

body {
  min-height: 100vh;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

span {
  font-size: 300%;
}
```

O que eu fiz foi simplesmente iniciar o nosso `index.html` com sua estrutura padrão, linkando o nosso arquivo css e a nossa fonte direto do Google Fonts, além de adicionar alguns estilos em nosso `style.css`.

Tranquilo por enquanto, né?

Eu vou utilizar a extensão Live Server do VSCode para visualizar em tempo real o nosso projeto no navegador. Caso você queira ver mais sobre essa e muitas outras extensões legais do VSCode, eu já fiz um [post sobre este assunto](https://www.gianlucca.dev/extens%C3%B5es-super-hiper-legais-para-vscode/), é só clicar e conferir!

Parte inicial feita! Bora para os nossos scripts?

# Iniciando o App.js

Agora começa a brincadeira!

Antes de partimos para o Timer em si, vamos iniciar o nosso `App.js`.

O App.js será o nosso [Módulo JavaScript](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Guide/Modules) principal.

> Modulo JavaScript? Que isso? 🤔

Os Módulos em Javascript são uma forma de compartilhar informações entre scripts, onde todo script que realizar a importação (`import`) de um módulo poderá utilizar suas funções ou informações que foram expostas (`export`). Assim evitamos carregar vários arquivos em nosso `HTML`! Super legal, né?

Bora ver na prática então:

**`App.js`:**

```javascript
const App = {
  init() { }
}

export { App };
```

E vamos importar este módulo no nosso HTML.

**`index.html`:**

```html
<!DOCTYPE html>
<html lang="pt-br">
<head>
  ...
</head>
<body>
  
  <script type="module">
    import { App } from './src/App.js';

    App.init();
  </script>
</body>
</html>
```

Perceba que: para que possamos utilizar os Módulos JavaScript, é preciso adicionar o atributo `type="module"` na tag `<script>` para que o HTML entenda que se trata de um Módulo JavaScript.

A sintaxe é bem tranquila!

A instrução `import { App } from './src/App.js';` é responsável pela importação do arquivo.

Já a chamada `App.init();` é responsável pela inicialização do nosso `App.js`, onde eu defini o método `init()`.

Mas essa importação só é possível porque eu exportei o nosso módulo `App.js` com a instrução `export { App };`.

Molezinha, né? Bora seguir!

# Implementando o Timer

Agora que o conceito de módulos já foi entendido, vamos seguir para a implementação do nosso Timer.