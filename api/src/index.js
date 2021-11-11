import adminController from './controller/adminController.js'
import homeController from './controller/homeController.js'
import roupasMController from './controller/roupasController.js'

import express from 'express'
import cors from 'cors'



const server = express();
server.use(cors());
server.use(express.json());




server.use('/produto', adminController );
server.use('/home', homeController);
server.use('/roupas', roupasController);


server.listen(
    process.env.PORT, 
    () => console.log ('...: server started'))

