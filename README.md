# 🌐 Frontend - Dinâmicas de Equipe

Este projeto é uma interface web desenvolvida com **HTML**, **CSS** e **JavaScript (ES6) puro** que desenvolvi como parte de um desafio para a Gigalink. Ele consome os dados da API Rails chamada **[`dinamica_de_equipe_api`](https://github.com/guerrinharj/dinamica_de_equipe_api)**.  
A aplicação permite o gerenciamento de **dinâmicas de equipe** com a possibilidade de avaliar cada uma delas.

---

## 📦 Tecnologias utilizadas

- HTML5  
- CSS3  
- JavaScript (ES6)  
- [`dinamica_de_equipe_api`](https://github.com/guerrinharj/dinamica_de_equipe_api) (API Ruby on Rails)

---

## 🧠 Objetivo do projeto

Criar uma aplicação web simples que consuma a API REST `dinamica_de_equipe_api` e permita ao usuário:

- Visualizar todas as dinâmicas cadastradas.
- Criar novas dinâmicas.
- Editar ou excluir dinâmicas existentes.
- Avaliar cada dinâmica com um comentário e uma nota de 1 a 5.
- Visualizar uma dinâmica aleatória.

---

## 🖼️ Funcionalidades da interface

### Página inicial (`index.html`)

- ✅ Lista todas as dinâmicas cadastradas.
- ✅ Mostra o **nome**, **descrição**, **participantes** e **avaliação média**.
- ✅ Botão para **exibir uma dinâmica aleatória**.
- ✅ Botão para **adicionar nova dinâmica**.
- ✅ Botões para **editar** ou **remover** uma dinâmica existente.

### Página de adicionar/editar dinâmica (`form.html`)

- ✅ Formulário para preencher os campos:
  - Nome da dinâmica
  - Descrição da dinâmica
  - Lista de participantes (separados por vírgula)
- ✅ Campos adicionais para:
  - Comentário da avaliação
  - Nota (de 1 a 5)

> Se um review for preenchido, ele será salvo automaticamente junto com a dinâmica.


### Página exclusiva para adicionar um review (`review.html`)

- ✅ Permite ao usuário enviar uma avaliação **sem precisar editar a dinâmica**.
- ✅ Mostra um menu dropdown com todas as dinâmicas disponíveis.
- ✅ Permite preencher:
  - Comentário (opcional)
  - Nota (opcional, entre 1 e 5)
- ✅ Caso nenhum campo seja preenchido, a requisição não é enviada.

> Essa página é ideal para permitir que usuários façam reviews em dinâmicas já cadastradas, sem modificar seus dados.

---

## 🔌 Comunicação com a API

Todos os dados são consumidos da API [`dinamica_de_equipe_api`](https://github.com/guerrinharj/dinamica_de_equipe_api), que deve estar rodando em:

```bash
http://localhost:3000/api/
```

Endpoints utilizados:
```bash
| Ação                     | Método | URL                                   |
|--------------------------|--------|----------------------------------------|
| Listar dinâmicas         | GET    | `/api/dinamicas`                      |
| Criar dinâmica           | POST   | `/api/dinamicas`                      |
| Atualizar dinâmica       | PATCH  | `/api/dinamicas/:id`                 |
| Excluir dinâmica         | DELETE | `/api/dinamicas/:id`                 |
| Ver dinâmica aleatória   | GET    | `/api/dinamicas/aleatoria`           |
| Criar avaliação (review) | POST   | `/api/dinamicas/:id/reviews`         |
| Listar participantes     | GET    | `/api/participantes`                 |

---
```



## ⚠️ Importante: CORS

Para que o frontend consiga se comunicar com a API, é necessário configurar o CORS no backend Rails. Certifique-se de ter a gem `rack-cors` instalada e configurada no arquivo:

## ▶️ Como rodar o projeto
- Clone este repositório.
- Inicie a API dinamica_de_equipe_api (ela deve estar rodando em localhost:3000).
- Abra o arquivo index.html no navegador do seu browser.