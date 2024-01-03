# Introdução

Tecnologias:

- Typescript, como linguagem de programação;

- React Hooks, como framework de desenvolvimento web para o frontend;

- Ant Design, como biblioteca de componentes;

- Jest e React Testing Library, como ferramentas de testes;

- Airbnb style guide, como guideline de padrão de escrita de código;

- Axios, como biblioteca para chamada de APIs

# Configurações

### Instalar dependências

- Agora deve-se instalar as depêndencias contidas no package.json

```bash
npm i
```

### Rodar o projeto

- Agora deve-se rodar o script de start

```bash
npm run dev
url: http://localhost:5173/
```

### Rodar os testes

- Agora deve-se rodar a suíte de testes

```bash
npm run test
```

# Problema

- Criei o projeto utilizando o Vite por ser mais performático que Webpack;
- A pasta 'src/api' contém a instância do Axios e as assinaturas das requests;
- A pasta 'src/assets' contém as imagens;
- A pasta 'src/components' contém os componentes utilizados nas pages e os arquivos index.ts exportam tais componentes;
- A pasta 'src/context' contém o contexto utilizado para armazenar dados globais para evitar o prop drilling;
- A pasta 'src/layouts' contém o protected layout que possui uma guarda de autenticação para as rotas não serem expostas sem que antes tenha sido feito o login;
- A pasta 'src/pages' contém as páginas;
- A pasta 'src/router' possui o arquivo de roteamento;
- A pasta 'src/types' possui as tipagens das constantes;

# Rotas

- Login

```bash
url: http://localhost:5173/
method: POST
body: "email", "password"
```

> As próximas rotas só poderão ser acessadas com o Login feito

- Restaurant List / Home

```bash
url: http://localhost:5173/restaurants
method: GET
```

- Restaurant Detail

```bash
url: http://localhost:5173/details/:id
method: GET
```
