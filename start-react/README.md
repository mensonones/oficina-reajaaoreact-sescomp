# Criando uma componente com ReactJs

### Objetivo

O objetivo desta tarefa é criar um componente ReactJs simples com o seguinte formato como mostra a imagem abaixo.

![App.js](src/assets/img/App.png?raw=true)

### O que será aprendido?

A estrutura básica de um componente ReactJs.

### Explicando a estrutura do componente

- Na primeira linha é importado o módulo react para podemos trabalhar com o mesmo;
- Na segunda linha é importando um <strong>css</strong> básico para estilização do componente;
- Na terceira linha declaramos nossa <strong>classe</strong> App e extendemos a <strong>React.Component</strong>;
- Da linha 4 a 9, temos o bloco do construtor do componente. O <strong>constructor</strong> é necessário para vinculação de manipuladores de <strong>eventos</strong> ao componete e/ou inicializar o estado local do componente, mas não necesariamente precisa-se ter o <strong>constructor</strong> para usar o <strong>state</strong>, já o <strong>props</strong> do <strong>constructor</strong> do componente são variáveis transmitidas a ele pelo componente pai. Ao implementar o <strong>constructor</strong> para uma subclasse <strong>React.Component</strong>, o <strong>super(props)</strong> deve ser chamado antes de qualquer outra instrução e se não declarado, não se pode usar o <string>this</strong>. No <strong>JavaScript</strong>, o <strong>super</strong> refere-se ao <strong>construtor</strong> da <strong>classe</strong> pai e aqui ele se refere ao <strong>React.Component</strong>. Em <strong>this.state</strong> definimos um estado inicial para nome;
- Na linha 10 temos o <strong>ComponentWillMount</strong> que faz parte do ciclo de vida do <strong>ReactJs</strong>, ele é o método executado após o <strong>construtor</strong> e antes do <strong>render</strong>, nele estamos usando o <strong>this.setState</strong> para definirmos/setarmos um novo estado para <strong>nome</strong>, mudando assim seu valor inicial de " " para "React". O <strong>setState</strong> basicamente diz ao <strong>ReactJs</strong> que o componente e seus filhos precisam ser re-renderizados;
- Na linha 15 a 21 temos o método <strong>render</strong> que é responsável por renderizar o componente. O <strong>render</strong> é uma método que possui um retorno, este retorno é o código do componente propriamente dito, código este escrito usando JSX, que nada mais é do que um "açúcar" sintático, bem semelhante ao XML. O <strong>React.Fragment</strong> permite agrupar uma lista de filhos sem adicionar nós extras ao DOM. A tag <strong>H1</strong> é o que de fato é renderizado no componete, nele passamos o <string>estado</strong> de <strong>nome</strong> através da <strong>interpolação</strong> {this.state.nome}.
