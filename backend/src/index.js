const express = require('express');
const cors = require('cors');
const app = express('');
const routes =require('./routes');

app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(3333);




/**
 * Rota // Recurso
 */
/**
 * metodos HTTP:
 * 
 * GET: Buscar/listar uma infirmação do back-end
 * POST: criar uma indotmalçao no back-end
 * PUT: alterar uma informaçao do back-end
 */

/**
  * Tipos da parametros
  * 
  * Query params: parametros nomeados enviados na rota apos ? (Filtros, paginação)
  * Route params:
  * parametros utilizads para indentificar recursos
  * Request Body: Corpo da requisição, utilizado para criar ou alterar 
  */

/**
 * Bancos de dados.
 * SQL: Mysql, SQLite, PostgreSQL, oracle
 * NoSQL: MongoBD, CouchDB.
 */

/**
  * Driver: SELECT * FROM users
  * Query Builder: table('users').select('')
  */




