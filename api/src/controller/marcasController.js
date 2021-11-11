import { Router } from 'express'

import db from '../db.js'

const app = Router();

app.get('/:marcas', async (req, resp) => {
    try{ 
        const {marcas} = req.params;
        const data = await db.infoc_tcc_produto.findAll({
            where: { 'nm_marcas': marcas}
        });
        resp.send(data);
    } catch (e) { 
        resp.send({ erro: e.toString() })
    }
})

export default app;