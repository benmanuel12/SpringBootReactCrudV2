# Spring Boot React CRUD Webapp V2

Practice application to link a PostgreSQL (or other) database to a React.js dashboard for CRUD functions using Spring Boot

Initial boilerplate code generated with the in28minutes Spring Boot guide

## Built with
Java 21, Spring Boot 4, React 19 (Vite), PostgreSQL

## Features
- Allows for the creation, reading, updating and deletion of database entries through a page made with React.js

## Running the app

### Prerequisites
- JDK 21 or newer (Maven is not needed - the project includes the Maven Wrapper)
- Node.js 22 or newer
- PostgreSQL, with a database and user matching `backend/src/main/resources/application.properties`:
  ```sql
  CREATE USER ben WITH PASSWORD 'password';
  CREATE DATABASE mydatabase OWNER ben;
  ```

### Backend (http://localhost:8080)
```
cd Spring_Boot_React_Webapp/backend
./mvnw spring-boot:run
```
On Windows Command Prompt or PowerShell, use `mvnw.cmd` instead of `./mvnw`.

### Frontend (http://localhost:3000)
```
cd Spring_Boot_React_Webapp/frontend
npm install
npm start
```

### Tests
- Backend: `./mvnw test` (needs PostgreSQL running)
- Frontend: `npm test`



