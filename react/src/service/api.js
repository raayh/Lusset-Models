import axios from 'axios'
const api = axios.create({
    baseURL: 'https://site-devstore.herokuapp.com'
})

export default class Api {
    async listar(){
        let r = await api.get('/produtos');
        return r.data;
    }

    async inserir(nome, categoria, precoDe, precoPor, avaliacao, descricao, quantidade, imagem){
        let r = await api.post('/produtos',{ nome, categoria, precoDe, precoPor, avaliacao, descricao, quantidade,imagem
        });
        return r.data;        
    }
    
    async alterar(id,nome, categoria, precoDe, precoPor, avaliacao, descricao, quantidade, imagem){
        let r = await api.put('/produtos/'+ id, {nome, categoria, precoDe, precoPor, avaliacao, descricao, quantidade, imagem});
        return r.data;
    }

    async remover(id){
        let r = await api.delete('/produtos/'+ id);
        return r.data;
    }
}