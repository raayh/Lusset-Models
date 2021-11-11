import adminController from './controller/adminController.js'
import homeController from './controller/homeController.js'
import roupasController from './controller/roupasController.js'
import acessoriosController from './controller/acessoriosController.js'
import marcasController from './controller/marcasController.js'
// import calcadosController from './controller/calcadosController.js'



import express from 'express'
import cors from 'cors'



const server = express();
server.use(cors());
server.use(express.json());




server.use('/produto', adminController );
server.use('/home', homeController);
server.use('/roupas', roupasController);
server.use('/acessorios', acessoriosController);
server.use('/marcas', marcasController);
// server.use('/calcados', calcadosController);


server.listen(
    process.env.PORT, 
    () => console.log ('...: server started'))

