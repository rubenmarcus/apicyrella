
  

# apicyrella

  

Api Cyrella para trabalho da Fiap
feita em Node.js + Express + Sequelize + MySql
hospedada no Heroku
  

## Como Rodar a Api

Via **Browser**:

é apenas possível ver as requisições **GET**

> Assistências

https://api-cyrella-fiap.herokuapp.com/assistencias

https://api-cyrella-fiap.herokuapp.com/assistencias/:id

  

>Ocorrências:

https://api-cyrella-fiap.herokuapp.com/ocorrencias

https://api-cyrella-fiap.herokuapp.com/ocorrencias/:id

  

Via **Postman**:

- acessar https://web.postman.co/workspace/My-Workspace~8bbacb73-9a42-40a1-8fab-220bf77aa1c5/folder/4908806-3bd4a1eb-d85e-4460-9e43-3c17c9c48de1

ou:

- Pasta Collections tem um arquivo **Cyrella API.postman_collection.json**, baixar ele.

- Importar no Postman

- Rodar os Requests das Collections, já estão com endpoints e Métodos corretos.

  

**localhost**:
**Rodamos o banco de staging**
- npm install nesse projeto

- criar um banco mysql com um schema Cyrella

- importar o script SQL da pasta **/sql** desse projeto

- **npm run nodemon:staging**

- rodar as requisições da collection **Cyrella API LocalHost.postman_collection.json**