# Veyron - Veículos
Sistema de veículos para cadastro demonstração das tecnologias Angular + Spring Boot

## Tecnologias
- Angular
- Spring Boot
![](https://i.imgur.com/Gt8TTVw.png)

## Instalação do Backend
A aplicação possui dois modos de execução

### 1 - Test
Neste modo utiliza-se o banco virtualizado H2 com seeds e não requer configuração de base de dados

1. Abrir projeto backend no STS (Spring Tools Suite) 
2. Verificar o "application.properties" que deve estar em modo test  
```
spring.profiles.active=test
```
3. Executar o projeto

### 2 - Dev
Neste modo utiliza-se o banco de dados postgres

1. Abrir projeto backend no STS (Spring Tools Suite) 
2. Verificar o "application.properties" que deve estar em modo dev
```
spring.profiles.active=dev
```
3. Verificar suas credenciais no postgres e alterar o arquivo "application-dev.properties"
obs: A base de dados deve ser criada no banco anteriormente
```
spring.datasource.url=jdbc:postgresql://localhost:5432/db_veyron_vehicles
spring.datasource.username=postgres
spring.datasource.password=1234567
```
4. Executar o projeto

## Instalação do Frontend
O frontend foi configurado para executar com proxy para não depender de configurações no backend para liberação de CORs

1. Atualizar dependencias
```
npm i
```
2. Executar projeto com proxy
```
npm run server-proxy
```

Licença
----

MIT

**Free Software, ;) .**

