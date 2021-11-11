import { Router } from 'express'

import db from '../db.js'

const app = Router();

app.get('/:acessorios', async (req, resp) => {
    try{ 
        const {categoria, descrição, preço, imagem} = req.params;
        const data = await db.infoc_tcc_produto.findAll({
            where: {
                'tp_peca': categoria,
                'nm_produto': descrição,
                'vl_preco_por': preço,
                'img_produto': imagem
            }
        });
        resp.send(data);
    } catch (e) { 
        resp.send({ erro: e.toString() })
    }
})

export default app;