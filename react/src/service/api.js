import axios from 'axios'
const api = axios.create({
    baseURL: 'https://lusset.herokuapp.com:38296/'//'https://site-devstore.herokuapp.com'
})

export default class Api {
    async listar(){
        let r = await api.get('/produtos');
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

    async listar2(categoria){
        let r = await api.get('/home/' + categoria);
        return r.data;
    }

    async listar3(genero){
        let r = await api.get('/roupas/' + genero)
        return r.data;
    }

    async listar4(acessorios){
        let r = await api.get('/acessorios/' + acessorios)
        return r.data;
    }

    async listar5(marcas){
        let r = await api.get('/marcas/' + marcas)
        return r.data;
    }
}