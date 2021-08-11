---
title: Minha implementação favorita de Timer!
description: Na minha opinião uma das melhores implementações de Timer
  utilizando JavaScript Vanilla!
date: 2021-08-11 01:01:12
thumbnail: /assets/img/timeraa.png
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

Antes de partimos para o `Timer` em si, vamos iniciar o nosso `App.js`.

O App.js será o nosso [Módulo JavaScript](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Guide/Modules) principal.

> Modulo JavaScript? Que isso? 🤔

Os Módulos em JavaScript são uma forma de compartilhar informações entre scripts, onde todo script que realizar a importação (`import`) de um módulo poderá utilizar suas funções ou informações que foram expostas (`export`). Assim evitamos carregar vários arquivos em nosso `HTML`! Super legal, né?

Bora ver na prática então:

**`App.js`:**

```javascript
const App = {
  init() { }
}

export { App };
```

E vamos importar este módulo no nosso `HTML`.

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

Perceba que: para que possamos utilizar os Módulos JavaScript, é preciso adicionar o atributo `type="module"` na tag `<script>`, assim o `HTML` entende que se trata de um `Módulo JavaScript`.

A sintaxe é bem tranquila!

A instrução `import { App } from './src/App.js';` é responsável pela importação do arquivo.

Já a chamada `App.init();` é responsável pela inicialização do nosso `App.js`, onde eu defini o método `init()`.

Mas essa importação só é possível porque eu exportei o nosso módulo `App.js` com a instrução `export { App };`.

Molezinha, né? Bora seguir!

# Implementando o Timer

Agora que o conceito de módulos já foi entendido, vamos seguir para a implementação do nosso Timer.

Vamos criar nosso arquivo `Timer.js` e importá-lo no nosso `App.js`.

`Timer.js`**:**

```javascript
const Timer = {
  const init() {}
}

export { Timer };
```

**`App.js`:**

```javascript
import { Timer } from './Timer.js';

const App = {
  init() {
    Timer.init();
  }
}

export { App };
```

Arquivo importado e iniciado, vamos colocar alguma lógica em ação agora.

Quando falamos em Timers em JS, geralmente falamos na função nativa [`setInterval()`](https://developer.mozilla.org/pt-BR/docs/Web/API/WindowOrWorkerGlobalScope/setInterval) Com ele nós podemos executar uma **determinada função**, sempre repetindo em um **determinado intervalo**.

E estas duas opções são exatamente os parâmetros que o `setInterval()` recebe.

Para implementá-lo, vou primeiro criar um novo método no meu `Timer.js` para cuidar desta parte da aplicação e em seguida referencia-lo como a função que o `setInterval()` precisa. Além disso, vamos passar `1000` como o segundo parâmetro, pois a função espera receber um valor em milissegundos, que no nosso caso será um intervalo de **1 segundo**.

E como mágica nós conseguimos abstrair a lógica do `init()` e deixá-la apenas no `countdown()`:

```javascript
const Timer = {
  init() {
    setInterval(Timer.countdown, 1000);
  },

  countdown() { },
};

export { Timer };
```

Para seguimos com a lógica do countdown(), precisamos antes definir algumas variáveis que serão uteis nesse método.

Vamos definir então:

* `time: number * 60`

  Esta variável será responsável pelo tempo fixo do nosso Timer (Exemplo: 25 minutos). Este valor fixo será multiplicado por 60 pois queremos ele em segundos.
* `currentTime: 0`

  Esta é a variável que será atualizada a cada ciclo do nosso `setInterval()`, sendo usada de referência para o próximo ciclo. Ele sempre iniciará com o valor de `time`, pois nosso contador é no formato decrescente.
* `interval: null`

  Esta variável vai armazenar o `setInterval()` em si, para que possamos finalizá-lo assim que o tempo do contador zerar, evitando tempos negativos no nosso Timer.

E a implementação ficou assim:

```javascript
const Timer = {
  // 25 minutos
  time: 25 * 60,
  
  currentTime: 0,
  interval: null,
  
  init() {
    Timer.currentTime = Timer.time;
    Timer.interval = setInterval(Timer.countdown, 1000);
  },

  countdown() { },
};

export { Timer };
```

Com as variáveis definidas, nós podemos partir para a lógica do `countdown()`, subtraindo o valor de `Timer.currentTime` e implementando a tratativa para evitar valores negativos.

```javascript
const Timer = {
  // 25 minutos
  time: 25 * 60,
  
  currentTime: 0,
  interval: null,
  
  init() {
    Timer.currentTime = Timer.time;
    Timer.interval = setInterval(Timer.countdown, 1000);
  },

  countdown() {
    Timer.currentTime--;

    if (Timer.currentTime === 0) {
      clearInterval(Timer.interval);
      return;
    }
    
    console.log(Timer.currentTime);
  },
};

export { Timer };
```

E dando uma olhada no nosso console do navegador, devemos ver isso:

![timer](/assets/img/timer.png "timer")

Perceba que para a tratativa de valores negativos, eu implementei uma validação e apliquei a função nativa [`clearInterval()`](https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/clearInterval), passando como parâmetro o nosso `Timer.interval.` Desta forma, quando o valor alcançar 0, nós finalizamos o `setInterval()`.

Olha que sensacional, já temos um Countdown Timer funcionando!

Claro que ainda não está formatado e nem renderizando na tela, mas já é um grande passo!

E falando em formatação, bora implementar isso?

A primeira coisa que eu vou fazer será criar as nossas funções para obter os **Minutos** e **Segundos** a partir destes milissegundos que nós já temos, e para isso vamos criar duas funções:

```javascript
const Timer = {
  // 25 minutos
  time: 25 * 60,
  
  currentTime: 0,
  interval: null,
  
  timeToMinutes: (time) => Math.floor(time / 60),
  timeToSeconds: (time) => time % 60,
  
  formatTime: (time) => String(time).padStart(2, "0"),
  
  init() {
    Timer.currentTime = Timer.time;
    Timer.interval = setInterval(Timer.countdown, 1000);
  },

  countdown() {
    Timer.currentTime--;

    if (Timer.currentTime === 0) {
      clearInterval(Timer.interval);
      return;
    }
    
    console.log(Timer.currentTime);
  },
};

export { Timer };
```

> Vish, complicou!

Caaaalma, vamos por partes!

O que eu fiz foi criar três funções que recebem o nosso `time` como parâmetro.

A primeira função (`timeToMinutes`) faz um calculo para transformarmos o valor passado em milissegundos para minutos, dividindo-o por 60. E este calculo esta dentro de um [`Math.floor()`](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Math/floor) para que o resultado seja sempre arredondado para baixo. Assim temos o nosso valor formatado para minutos!

A segunda função (`timeToSeconds`) é responsável pela formatação do nosso valor em segundos, e ela faz isso utilizando o resto da divisão do `time` por `60`, assim obtemos sempre o resto já formatado para segundos! Animal, né não!?

A última formatação (`formatTime`) cria uma pequena regra para que números menores que 10, tenham um "0" adicionado em seu início. Esta regra já é bem conhecida mas a forma que implementamos aqui é de cair o queixo! \
Para isso eu utilizei a função [`padStart()`](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/String/padStart) que basicamente recebe um parâmetro e valida se a string possui menos caracteres que este valor, caso sim, a string receberá no seu início uma outra string, ocupando-a até atingir o length especificado.

Show de bola, todos os nossos valores agora estão formatados!

# Renderizando o timer em nossa view

Por se tratar de outra funcionalidade, vamos criar um novo arquivo (`View.js`) e referenciá-lo no nosso `Timer.js`.

**`View.js`:**

```javascript
const View = {
  render() {}
}

export { View };
```

**`Timer.js`:**

```javascript
import { View } from "./View.js";

const Timer = {
  // 25 minutos
  time: 25 * 60,
  
  currentTime: 0,
  interval: null,
  
  timeToMinutes: (time) => Math.floor(time / 60),
  timeToSeconds: (time) => time % 60,
  
  formatTime: (time) => String(time).padStart(2, "0"),
  
  init() {
    Timer.currentTime = Timer.time;
    Timer.interval = setInterval(Timer.countdown, 1000);
  },

  countdown() {
    Timer.currentTime--;

    if (Timer.currentTime === 0) {
      clearInterval(Timer.interval);
      return;
    }
    
    console.log(Timer.currentTime);
  },
};

export { Timer };
```

Show!

Agora vamos renderizar dinamicamente os minutos e segundos dentro do nosso `HTML`.

**`View.js`:**

```javascript
const View = {
  render({minutes, seconds}) {
    document.body.innerHTML = `
    <p>Simple Timer</p>
    <span>${minutes}:${seconds}</span>
    `;
  }
}

export { View };
```

Perfeito! Agora precisamos apenas referenciar essa renderização no nosso `Timer.js`. Para isso vou criar uma nova função chamada `updateView()`, que será responsável por essa funcionalidade. Além de referencia-la em nosso `countdown()`.

**`Timer.js`:**

```javascript
import { View } from "./View.js";

const Timer = {
  time: 25 * 60,
  currentTime: 0,
  interval: null,

  timeToMinutes: (time) => Math.floor(time / 60),
  timeToSeconds: (time) => time % 60,

  formatTime: (time) => String(time).padStart(2, "0"),

  init() {
    Timer.currentTime = Timer.time;
    Timer.interval = setInterval(Timer.countdown, 1000);
  },

  countdown() {
    Timer.currentTime--;

    Timer.updateView();

    if (Timer.currentTime === 0) {
      clearInterval(Timer.interval);
      return;
    }
  },

  updateView() {},
};

export { Timer };
```

E para finalizar com chave de ouro, vamos apenas passar os nosso valores formatados (utilizando nossas funções de formatação) para a `View.js`.

**`Timer.js`:**

```javascript
import { View } from "./View.js";

const Timer = {
  time: 25 * 60,
  currentTime: 0,
  interval: null,

  timeToMinutes: (time) => Math.floor(time / 60),
  timeToSeconds: (time) => time % 60,

  formatTime: (time) => String(time).padStart(2, "0"),

  init() {
    Timer.currentTime = Timer.time;
    Timer.interval = setInterval(Timer.countdown, 1000);
  },

  countdown() {
    Timer.currentTime--;

    Timer.updateView();

    if (Timer.currentTime === 0) {
      clearInterval(Timer.interval);
      return;
    }
  },

  updateView() {
    const minutes = Timer.formatTime(Timer.timeToMinutes(Timer.currentTime));
    const seconds = Timer.formatTime(Timer.timeToSeconds(Timer.currentTime));

    View.render({ minutes, seconds });
  },
};

export { Timer };
```

E quando nós abrimos o navegador, saca só o resultado:

![timer funcionando](/assets/img/timeraa.png "timer working")

# Conclusão

Resultado incrível, né? Eu diria que a função `padStart()` para a formatação de números foi a cereja do bolo!

Por hoje é só, espero que os assuntos abordados sejam úteis para você! Nos vemos no próximos post. 

Até!