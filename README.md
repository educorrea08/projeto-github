# projeto-github
# Jogo da Forca

Jogo da forca feito com HTML, CSS e JavaScript, desenvolvido como atividade prática de Git e GitHub.

## Sobre o projeto

O jogo sorteia uma palavra relacionada à informática e mostra uma dica. O jogador tenta descobrir a palavra letra por letra, com no máximo **6 erros**. A cada erro, uma parte do boneco aparece na forca.

## Funcionalidades

- Sorteio aleatório de palavras com dica
- Jogo pelo teclado da tela ou pelo teclado do computador
- Desenho da forca em SVG, que aparece conforme os erros
- Mensagem de vitória ou derrota (mostrando a palavra correta)
- Botão para iniciar um novo jogo
- Layout responsivo (funciona no celular)

## Tecnologias utilizadas

- HTML5
- CSS3
- JavaScript (puro, sem bibliotecas)
- Git e GitHub

## Estrutura de arquivos

```
projeto-github/
├── index.html   # estrutura da página
├── style.css    # estilo visual
├── script.js    # lógica do jogo
├── LICENSE      # licença MIT
└── README.md    # documentação
```

## Como executar

1. Clone o repositório:
   ```
   git clone https://github.com/educorrea08/projeto-github.git
   ```
2. Entre na pasta do projeto:
   ```
   cd projeto-github
   ```
3. Abra o arquivo `index.html` no navegador (ou use a extensão Live Server do VS Code).

## Como jogar

1. Leia a dica e observe os traços da palavra.
2. Clique nas letras (ou digite no teclado) para tentar acertar.
3. Acertou a letra? Ela aparece na palavra.
4. Errou a letra? Uma parte do boneco é desenhada.
5. Você ganha ao descobrir a palavra e perde ao completar 6 erros.

## Como adicionar novas palavras

Abra o arquivo `script.js` e inclua um novo item na lista `PALAVRAS`:

```js
{ palavra: "exemplo", dica: "Escreva aqui a dica" }
```

## Fluxo de trabalho no Git

Durante o desenvolvimento foram praticados:

- Criação do repositório e clonagem
- Commits com mensagens descritivas
- Criação de branches para novas funcionalidades
- Pull Request e merge

## Autor

**Eduardo Correa**
Estudante de Ciência da Computação — UNICID

## Licença

Este projeto está licenciado sob a [Licença MIT](LICENSE).
