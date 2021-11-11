import { Router } from 'express'

import db from '../db.js'

const app = Router();

app.get('/', async (req, resp) => {
    try{ 
        let p = await db.infoc_tcc_produto.findAll({ order: [[ 'id_produto', 'desc']] }); 
        resp.send(p); 
    } catch (e) { 
        resp.send({ erro: e.toString() })
    }
})

app.post('/', async (req, resp) => { 
    try { 
            let { nome, genero, disponivel, categoria, precoDe, precoPor, avaliacao,
                 descricao, cores, tamanhos, quantidade, imagem} = req.body; 
            
            
     let validacao = await db.infoc_tcc_produto.findAll({where: {nm_produto: nome, vl_avaliacao: avaliacao, vl_preco_de: precoDe, vl_preco_por: precoPor, qtd_produto: quantidade, ds_cores: cores, ds_tamanho: tamanhos, bt_disponivel: disponivel, ds_genero: genero}});

     if(nome == '')
            return resp.send({ erro: 'O campo nome é obrigatório!' });
    
     if(precoDe == '')
            return  resp.send({ erro: 'O número da precoDe deve ser positivo!'}) 
            
    if(categoria == '')
         return resp.send({ erro: 'O campo categoria é obrigatório!' });
    
    if(precoPor == '')
        return  resp.send({ erro: 'O número da precoPor é obrigatório!'})
        
    if(avaliacao == '')
        return resp.send({ erro: 'O campo avaliacao é obrigatório!' });
        
    if(quantidade == '')
        return resp.send({ erro: 'O campo quantidade é obrigatório!' });

    if(imagem == '')
        return resp.send({ erro: 'O campo imagem é obrigatório!' });

    if(descricao == '')
        return resp.send({ erro: 'O campo descricao é obrigatório!' });

    if(cores == '')
        return resp.send({ erro: 'O campo descricao é obrigatório!' });

    if(tamanhos == '')
        return resp.send({ erro: 'O campo descricao é obrigatório!' });    


    if(validacao == NaN)
        return resp.send({ erro: 'Os campos Validação, Preços e de Quantidade devem ser números!'})

            let p = await db.infoc_tcc_produto.create({
                nm_produto: nome,
                ds_categoria: categoria,
                vl_preco_de: precoDe,   
                vl_preco_por: precoPor, 
                vl_avaliacao: avaliacao,
                ds_cores: cores,
                ds_tamanho: tamanhos,       
                qtd_produto: quantidade,
                img_produto: imagem, 
                ds_produto: descricao, 
                bt_disponivel: disponivel,
                ds_genero: genero
            })    
            
               resp.send(p); 
               
    } catch (e) { 
        resp.send({ erro: e.toString() })
    }
})

app.put('/:id', async (req, resp) => {
 try { 
    let { nome, categoria, precoDe, precoPor, avaliacao,
        descricao, cores, tamanhos, quantidade, imagem, genero, disponivel} = req.body; 

     let { id } = req.params; 

     let p = await db.infoc_tcc_produto.update({ 
            nm_produto: nome,
            ds_categoria: categoria,
            vl_preco_de: precoDe,   
            vl_preco_por: precoPor, 
            vl_avaliacao: avaliacao, 
            ds_cores: cores,
            ds_tamanho: tamanhos,      
            qtd_produto: quantidade,
            img_produto: imagem, 
            ds_produto: descricao, 
            bt_disponivel: disponivel,
            ds_genero: genero

     },
     { 
         where: { id_produto: id }
     })

     resp.sendStatus(200); 

 } catch (e) { 
    resp.send({ erro: e.toString() })
 }
})

app.delete('/:id', async (req, resp) => { 
    try { 
        let {id} = req.params;

        let r = await db.infoc_tcc_produto.destroy({ where: {id_produto: id}})
        resp.sendStatus(200);

    } catch (e) {
        resp.send({ erro: e.toString() })
    }
})

export default app;