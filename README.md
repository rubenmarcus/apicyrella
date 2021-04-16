
# apicyrella

Api Cyrella para trabalho da Fiap

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

 - Pasta Collections tem um arquivo **Cyrella API.postman_collection.json**, baixar ele.
 - Importar no Postman
 - Rodar os Requests das Collections, já estão com endpoints e Métodos corretos.

**localhost**:
 - npm install nesse projeto
 - criar um banco mysql com um schema Cyrella
 - importar o script SQL da pasta **/sql** desse projeto
 - npm run dev
 - rodar as requisições da collection **Cyrella API LocalHost.postman_collection.json**
