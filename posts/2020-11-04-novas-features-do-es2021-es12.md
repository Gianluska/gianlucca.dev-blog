---
title: Novas features do ES2021/ES12.
description: Conhecendo as novas features da melhor linguagem de programação do mundo! xD
date: 2020-11-10 02:11:00
thumbnail: assets/img/1_qryy7n9t0sypta4xmkmjvq.png
category: js
background: "#D6BA32"
---
# Introdução

Faaaaala galera, tudo certo? Não poderia faltar um post sobre as novas features do ES12 aqui no blog, né? Então sem enrolação, bora lá passar pelas principais features!

# String replaceAll()

Eu ouvi um amém? Huahuaha.\
Finalmente um método nativo para isso! <s>Chega de gambiarras com loop.</s>

O que o `replaceAll()` faz é retornar uma nova `String` com **todas** as ocorrências de um padrão substituídas por um determinado caractere.

Oooou seja, ele faz exatamente o que o `replace()` faz, mas agora percorrendo e substituindo todas as strings correspondentes. Muito mágico, né?

Para entendermos a diferença, bora ver um exemplo do método `replace()` primeiro:

```javascript
// Exemplo replace()
const minhaString = "Gian é o cara do Back-End! Ele ama muito Back-End!";
const novaString = minhaString.replace("Back", "Front");
console.log(novaString); 
// "Gian é o cara do Front-End! Ele ama muito Back-End!"
```

Perceba que apenas a primeira ocorrência da `String` "Back" foi substituída. Not cool, buddy >:(

Agora um exemplo com `replaceAll()`:

```javascript
// Exemplo replaceAll()
const minhaString = "Gian é o cara do Back-End! Ele ama muito Back-End!";
const novaString = minhaString.replaceAll("Back", "Front");
console.log(novaString); 
// "Gian é o cara do Front-End! Ele ama muito Front-End!"
```

Outra dica legal é que da para concatenar o método `replaceAll()` numa `String`, assim você pode determinar na mesma linha vários padrões que deseja substituir na `String`. Mas cuidado, repense se essa solução é de fato a solução ideal, fechou? Bora pra próxima xD.

# Métodos e Acessadores Privados

> Acessadores, Gian? Sério?

Pois é meu querido, acredite ou não essa é a palavra em português adotada pela MDN para representar os **Accessors**. Doido, né?

Agora podemos definir um método como privado utilizando o caractere `#` antes de seu nome. Simples assim, agora você tem um método que só pode ser acessado dentro da classe em que foi definido. Magic!

Se liga no exemplo:

```javascript
class Pessoa {

  // Metodo privado
  #metodoPrivadoMuitoLouco() {
    console.log("Eu sou privado, hehehe");
  }

  // Metodo público
  metodoPublicoComum() {
    this.#metodoPrivadoMuitoLouco();
  }

}

const objetoDePessoa = new Pessoa();
objetoDePessoa.metodoPublicoComum(); // "Eu sou privado, hehehe";
objetoDePessoa.metodoPrivadoMuitoLouco(); // TypeError: objetoDePessoa.metodoPrivadoMuitoLouco is not a function
```

Além do método, também é possível definir acessadores com a mesma sintaxe, confere o exemplo:

```javascript
class Pessoa {
  // Acessador público
  get nome() { return "Gian" }
  set nome(value) {}

  // Acessador privado
  get #idade() { return 19 }
  set #idade(value) {}
}
const objetoDePessoa = new Pessoa();
console.log(objetoDePessoa.nome); // "Gian"
console.log(objetoDePessoa.idade); // undefined
```

# Operadores de Atribuição Lógica

Para fechar com chave de ouro: a cereja do bolo!

Essa feature é animal, ela combina os operadores lógicos (`&&`, `||`, `??`) com atribuição. Parece complexo mas é super simples, bora lá para um exemplo:

```javascript
let x = 1;
let y = 2;
x &&= y;
console.log(x); // 2
```

> Gian, o que diacho a linha 3 faz?

Vamos lá, haha. Como `x` é um valor válido, ele é atribuído com o valor de `y`, ou seja, 2.

Então a linha 3 pode ser traduzida para:

```javascript
if(x) {
  x = y
}
```

Muito legal, né?

Além do `&&`, o mesmo pode ser feito com `||` e `??` (que é o operador de coalescência nula, que checa se o valor é `null` ou `undefined`, bem útil!).

```javascript
let x = 1;
let y = 2;
x ||= y;
console.log(x); // 1

// ---------------------------------

let x;
let y = 2;
x ??= y;
console.log(x); // 2
```

Estes exemplos podem ser traduzidos por:

```javascript
x || (x = y)

// ---------------------------------

x = x ?? (x = y)
```

Muito legal, assim conseguimos economizar algumas linhas de código! xD.

# Conclusão

Isso sim que são novas features! Confesso que esperava algumas delas logo no ES2020, mas antes tarde do que nunca, né? 

No post abordei de forma super simplificada algumas features que julguei serem as mais legais. Ainda não temos muito conteúdo pt-br sobre o ES12, então caso você saiba um pouco de inglês eu super recomendo o [post do Backbencher](https://backbencher.dev/javascript/es2021-new-features), nele são citadas e explicadas todas as features. Eu inclusive usei esse material como consulta para esse post, então não esquece de conferir, ok? ;).

Lembrando que a área de comentários é livre para qualquer discussão sobre o post, então use e abuse dela, fechou?

Por hoje é só, obrigado por me acompanhar até aqui! Nos vemos semana que vem xD.