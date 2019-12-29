[![Gitpod Ready-to-Code](https://img.shields.io/badge/Gitpod-Ready--to--Code-blue?logo=gitpod)](https://gitpod.io/#https://github.com/pra-melhor/pramelhor.com.br) 

# Pra Melhor

Este projeto é para o site: [Pra Melhor](https://www.pramelhor.com.br/)


## Stack Utilizada:

- React 16.7. Utilizado para carregamento dinâmico de conteúdo na página;
- Webpack 4. Maior facilidade em criar um workflow dinâmico;
- Pré-processador SCSS para ter maior facilidade e aproveitamento de CSS;


## Setup

- Node v10.6 ou Superior;
- Para gerenciar os pacotes, escolha entre NPM v6.4+ ou Yarn v1.13+;

## Instalação:

Após clonar e se posicionar na pasta do projeto:

* Utilize um dos dois:

``npm install ou yarn install``
``npm start ou yarn start``

## Comandos:

- yarn start: ``Inicia um servidor em modo Desenvolvedor``
- yarn build: ``Inicia um servidor em modo Produção (Arquivos minificados)``


## Estrutura de Arquivos:

```
├── .babelrc
├── postcss.config.js
├── .git
├── .gitignore
├── webpack.config.js
├── manifest.webmanifest
├── node_modules
├── package.json
├── README.md
├── dist
│   ├── favicon.ico
|   ├── fonts
|   ├── img
│   ├── index.html
│   ├── main.css
|   ├── manifest.webmanifest
│   └── bundle.js
├── src
│   ├── components
|   ├── fonts
│   ├── scss
|   |   └── components
│   ├── img
|   ├── index.html
│   └── main.js
└── yarn.lock
```