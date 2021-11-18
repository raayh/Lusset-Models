import axios from 'axios'
const api = axios.create({
    baseURL: 'http://localhost:3030' //'https://lusset.herokuapp.com:38296/'//'https://site-devstore.herokuapp.com'
})

export default class Api {
    async listar(){
        let r = await api.get('/produto');
        return r.data;
    }

    async inserir(nome, categoria, precoDe, precoPor, avaliacao, descricao, cores, tamanhos, quantidade, imagem){
        let r = await api.post('/produtos',{ nome, categoria, precoDe, precoPor, avaliacao, descricao, cores, tamanhos, quantidade,imagem
        });
        return r.data;        
    }
    
    async alterar(id,nome, categoria, precoDe, precoPor, avaliacao, descricao, cores, tamanhos, quantidade, imagem){
        let r = await api.put('/produtos/'+ id, {nome, categoria, precoDe, precoPor, avaliacao, descricao, cores, tamanhos, quantidade,imagem});
        return r.data;
    }

    async remover(id){
        let r = await api.delete('/produtos/'+ id);
        return r.data;
    }
}