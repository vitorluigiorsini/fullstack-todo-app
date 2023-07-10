# Gerenciador de Tarefas - TODO App

## 💻 Projeto

Aplicação web para gerenciar tarefas. O usuário poderá criar, editar, excluir e visualizar sua lista de tarefas.

## 🚀 Tecnologias

Este projeto foi desenvolvido com as principais tecnologias:

- [Docker](https://docker.com/)
- [PostgreSQL](https://postgresql.org)
- [Node.js](https://nodejs.org/en/)
- [React](https://reactjs.org)

## 📑 Pré-requisitos

- Tenha o docker engine e o docker composer instalados e funcionando. [Docker engine - instalação](https://docs.docker.com/engine/install/)
- Após clonar o projeto, rode o container usando o arquivo `docker.compose.yaml`.

## 🔖 Instalação

Para clonar e rodar esta aplicação, você precisará do [git](https://git-scm.com), [npm](https://www.npmjs.com/), [node](https://nodejs.org/en/).
<br/>Versão do node usada neste projeto: `16.20.0`
<br/>No seu terminal:

```bash
# Clonar o repositório
$ git clone https://github.com/vitorluigiorsini/fullstack-todo-app.git
```

### 🖥️ Client

```bash
# Abra a pasta client
$ cd client

# Instale as dependencias
$ npm install

# Rode a aplicação web
$ npm start

# Crie o arquivo .env com base no .env.example
# Navegue para http://localhost:3000
# A aplicação irá reiniciar automaticamente se houver qualquer mudança nos arquivos fonte.
```

### ⚙️ Server

```bash
# Abra a pasta server
$ cd server

# Instale as dependencias
$ npm install

# Rode o servidor
$ npm start

# Crie o arquivo .env com base no .env.example
# Use o arquivo api.http para testar os endpoints.
# A aplicação irá reiniciar automaticamente se houver qualquer mudança nos arquivos fonte.
```

## ✨ TODO

- responsividade
- validação de formulário (ex.: `joi`, `zod`)
- styled components
- clean architecture
- solid

## 📝 License

Este projeto está sob a licensa MIT. Veja [LICENSE](LICENSE.md) para mais informações.

---

Feito com ♥ por Vitor Orsini - [Entre em contato](https://www.linkedin.com/in/vitorluigiorsini/)
