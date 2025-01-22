# Sistema de Gerenciamento de Frutas  

## Descrição do Projeto  

Este projeto é uma aplicação web dedicada ao gerenciamento de frutas, permitindo que os usuários gerenciem um catálogo de produtos de forma eficiente. O objetivo é desenvolver uma interface moderna e responsiva para facilitar a busca, criação, edição e remoção de frutas, utilizando tecnologias modernas e boas práticas de desenvolvimento.  

## Objetivo  

Criar uma aplicação web para gerenciamento de produtos focada em frutas com as seguintes funcionalidades:  

- Buscar frutas.  
- Criar novos registros de frutas.  
- Editar informações de frutas existentes.  
- Remover frutas do catálogo.  

## Tecnologias Utilizadas  

### Frontend  

- **Framework**: [Angular](https://angular.io/)  
- **Design System**: [Angular Material](https://material.angular.io/)  

### Funcionalidades do Dashboard  

- **Busca de Frutas**: Campo de busca com filtros baseados no nome, categoria ou outros critérios relacionados às frutas. Suporte a consultas dinâmicas para facilitar a listagem.  

- **Listagem Paginada**: As frutas são listadas de forma paginada, proporcionando uma melhor navegação entre os itens.  

- **Criação de Frutas**: Formulário responsivo para adicionar novas frutas, incluindo validação de campos como nome, descrição, preço e categoria.  

- **Edição de Frutas**: O sistema permite editar os dados de uma fruta com pré-preenchimento automático no formulário para facilitar as atualizações.  

- **Remoção de Frutas**: Antes de remover uma fruta, um modal de confirmação é exibido para evitar exclusões acidentais.  

- **Listagem de Frutas**: Os produtos são exibidos em uma tabela com funcionalidades de paginação, ordenação e colunas dinâmicas.  

- **Feedback ao Usuário**: Mensagens de sucesso ou erro são apresentadas ao usuário após operações como criação, edição e exclusão.  

### Componentes Utilizados do Angular Material  

- **Tabela**: `MatTable`  
- **Formulários**: `ReactiveForms` com `MatFormField`, `MatInput`  
- **Botões e ícones**: `MatButton`, `MatIcon`  
- **Modais e diálogos**: `MatDialog`  
- **Snackbars**: para exibir notificações ao usuário.  

### Backend  

- **Biblioteca**: [json-server](https://github.com/typicode/json-server) - Um servidor simples para criar uma API RESTful a partir de um arquivo JSON. 
