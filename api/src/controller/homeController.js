import { Router } from 'express'

import db from '../db.js'

const app = Router();

app.get('/:categoria', async (req, resp) => {
    try{ 
        const {categoria} = req.params;
        const data = await db.infoc_tcc_produto.findOne({
            where: {'ds_categoria': categoria}
        });
        resp.send(data);
    } catch (e) { 
        resp.send({ erro: e.toString() })
    }
})

export default app;