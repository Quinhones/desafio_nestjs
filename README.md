## Passo 1
Clonar o projeto

## Passo 2
Abrir o prompt na pasta e rodar um 'npm install'

## Passo 3
Rodar um 'npm install @types/node --save-dev'

## Passo 4
Criar um banco de dados no Postgres com o nome "desafionodejs"

## Passo 5
Alterar os arquivos ormconfigjson e docker.env para seu usuario e senha do postgres e o seu host para localhost

## Passo 6 
Alterar no arquivo docker-compose.yml o nome para o seu container que deseja usar

## Passo 7
Ligar o Docker e em outro prompt rodar o comando 'docker-compose up'

## Passo 8 
'npm run start' no prompt

## Passo 9 
O programa ja estara rodando e conectado ao seu banco de dados

## Passo 10
Abrir o insomnia e rodar as rotas que mandarei a seguir

## Passo 11
Depois que estiver no insomia aberto e o servidor rodando só rodar as seguintes rotas:

Cadastrar usuario:
mudar para o metodo 'POST' no Insomnia e por a seguinte rota: 
localhost:3333/users

Listagem de todos os Usuarios:
mudar para o metodo 'GET' no Insomnia e por a seguinte rota: 
localhost:3333/users

Visualizar um usuario especifico:
mudar para o metodo 'GET' no Insomnia e por a seguinte rota: 
localhost:3333/users/'id'

Recuperar por CPF:
mudar para o metodo 'GET' no Insomnia e por a seguinte rota:
localhost:3333/cpf/'cpf do usuario que desjea verificar'

Editar usuario:
mudar para o metodo 'PATCH' ou 'PUT' no Insomnia e por a seguinte rota:
localhost:3333/users/update/'id do usuario que deseja alterar'

Deletar usuario:
mudar para o metodo 'DELETE' no Insomnia e por a seguinte rota: 
localhost:3333/users/delete/'id do usuario que deseja deletar'

Recuperar por CEP e mostrar o endereço VIACEP:
mudar para o metodo 'GET' no Insomnia e por a seguinte rota: 
localhost:3333/users/cep/'CEP do usuario que deseja'


## Passo 12
Para visualizar os testes unitarios que estão sendo feitos, é só parar o servidor e colocar no prompt o comando: 'npm run test'