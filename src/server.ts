import express from 'express';
import path from 'path';
import cors from 'cors';

import 'express-async-errors';

import './database/connection';   // CONEXÃO BANCO DE DADOS

import routes from './routes';
import errorHandler from './errors/handler';





const app = express();

app.use(cors());   // PERMITE ACESSO À TODOS OS FRONT ENDS QUE TIVEREM.
app.use(express.json());  // PARA O EXPRESS RECONHECER O JSON
app.use(routes);
app.use('/uploads', express.static(path.join(__dirname, '..', 'uploads')));
app.use(errorHandler);



// app.get -  É UMA ROTA
// users - É UM RECURSO
// get - MÉTODO HTTP (SÃO USADOS: get, put, post, delete)
// GET - BUSCAR 1 INFORMAÇÃO
// POST - CRIANDO 1 INFORMAÇÃO NOVA
// PUT - EDITANDO 1 INFORMAÇÃO
// DELETE - DELETAR 1 INFORMAÇÃO

// PARÂMETROS:
// Query Params: http://localhost:3333/users?search=ualzem  (vai buscar pelo nome ualzem)
// Route Params: http://localhost:3333/users/1   (vai buscar por parâmetro, usuario com ID 1)
// Body: http://localhost:3333/users/  (para colocar todos os dados da API)


//  CRIANDO 1 NOVO ORFANATO COM O MÉTODO POST:



app.listen(3333);

// ELE IRÁ RODAR NO BROWSER ASSIM: localhost:3333