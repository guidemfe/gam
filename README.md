# Guia de Arquitetura Micro-Frontends (GAM)

Bem-vindo ao Guia de Arquitetura Micro-Frontends (GAM)!

## Visão Geral

O GAM é um guia abrangente para a implementação e adoção bem-sucedidas da arquitetura de Micro-Frontends. Esta abordagem arquitetônica permite o desenvolvimento, implantação e manutenção independentes de componentes de interface do usuário, oferecendo flexibilidade e escalabilidade para projetos web.

## Conteúdo

1. [Introdução](#introdução)
   - Visão geral sobre as viabilidades gerenciais e estratégicas relacionadas à arquitetura Micro-Frontends.

2. [Viabilidades Gerenciais](#viabilidades-gerenciais)
   - Alinhamento aos Objetivos Estratégicos
   - Custos e Orçamento
   - Gestão de Mudanças e Treinamentos

3. [Benefícios de Adoção](#benefícios-de-adoção)
   - Incremental Upgrades
   - Simple, Decoupled Codebases
   - Independent Deployment
   - Autonomous Teams

4. [Desafios e Considerações](#desafios-e-considerações)
   - Payload Size
   - Environment Differences
   - Operational and Governance Complexity

## Como Usar Este Guia

1. Explore os diferentes tópicos para compreender os aspectos fundamentais da arquitetura Micro-Frontends.

2. Siga as recomendações práticas e exemplos fornecidos para uma implementação bem-sucedida.

3. Contribua com feedback, sugestões ou melhorias abrindo issues ou enviando pull requests.

## Contribuição

Este guia é uma iniciativa colaborativa. Sua contribuição é essencial para melhorar e expandir o conteúdo. Sinta-se à vontade para contribuir com novos tópicos, exemplos de código ou correções.

### Installation

``` bash
$ npm install
```

or

``` bash
$ yarn install
```

### Basic usage

``` bash
# dev server with hot reload at http://localhost:3000
$ npm start 
```

or 

``` bash
# dev server with hot reload at http://localhost:3000
$ yarn start
```

Navigate to [http://localhost:3000](http://localhost:3000). The app will automatically reload if you change any of the source files.

#### Build

Run `build` to build the project. The build artifacts will be stored in the `build/` directory.

```bash
# build for production with minification
$ npm run build
```

or

```bash
# build for production with minification
$ yarn build
```

## Licença

Este guia é distribuído sob a licença [MIT](LICENSE).


