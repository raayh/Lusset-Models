import adminController from './controller/adminController.js'

import express from 'express'
import cors from 'cors'


const server = express();
server.use(cors());
server.use(express.json());

server.use('/produto', adminController );


server.listen(process.env.PORT, () => console.log ('...: server started'))

