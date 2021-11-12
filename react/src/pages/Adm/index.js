import { useState, useEffect, useRef } from 'react';

import Menu from '../../components/Menu/menu'
import CabecalhoClient from '../../components/cabecalho/CabecalhoClient/index'

import { Container, Conteudo } from './styled';
import LoadingBar from 'react-top-loading-bar';

import { confirmAlert } from 'react-confirm-alert';    //Import
import 'react-confirm-alert/src/react-confirm-alert.css';    //Import css

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Api from '../../service/api';
const api = new Api();


export default function Admin(){
const loading = useRef(null);

    const[produtos, setProdutos] = useState([]);
    const[nome, setNome] = useState('');
    const[categoria, setCategoria] = useState('');
    const[precoDe, setPrecoDe] = useState('');
    const[precoPor, setPrecoPor] = useState('');
    const[avaliacao, setAvaliacao] = useState('');
    const[descricao, setDescricao] = useState('');
    const[quantidade, setQuantidade] = useState('');
    const[imagem, setImagem] = useState('');
    const[idAlterando, setIdAlterando] = useState(0);

        async function listar(){
            let r = await api.listar();
            setProdutos(r);
        }

    async function inserir(){
        if(idAlterando === 0) {
            let r = await api.inserir(nome, categoria, precoDe, precoPor, avaliacao, descricao, quantidade, imagem);
            loading.current.complete();

            if(r.erro) 
            toast.info(`${r.erro}`)
            else 
            toast.success(' Produto inserido💕!');

        } else {
            let r = await api.alterar(idAlterando,nome, categoria, precoDe, precoPor, avaliacao, descricao, quantidade, imagem);
            loading.current.complete();
            if(r.erro) 
                toast.error('Verifique as alterações, e tente novamente!😊🚀')
            else 
                toast.dark(' Produto Alterado😆!'); 

        }
        limparCampos();
        listar();   
    }

    function limparCampos() {
        setNome('');
        setCategoria('');
        setPrecoDe('');
        setPrecoPor('');
        setAvaliacao('');
        setDescricao('');
        setQuantidade('');
        setImagem('');
        setIdAlterando(0);
    }

    async function remover(id){
        confirmAlert({
            title: 'Remover produto🗑️',
            message: `🤯Tem certeza que deseja remover o Produto ${id}?😢`,
            buttons: [ 
                {
                    label: 'Sim',
                    onClick: async () => {
                        let r = await api.remover(id);
                        console.log(r)
                        if(r.erro)
                            toast.error(`${r.erro}`);
                        else {
                            toast.dark(' Produto removido!❤️‍🔥')
                            listar();
                        }
                    }   
                },
                {
                    label: 'Não'
                }
            ]
        });
    }

    async function alterar(item){
        setNome(item.nm_produto);
        setCategoria(item.ds_categoria);
        setPrecoDe(item.vl_preco_de);
        setPrecoPor(item.vl_preco_por);
        setDescricao(item.ds_produto);
        setQuantidade(item.qtd_estoque);
        setImagem(item.img_produto);
        setIdAlterando(item.id_produto);        
    }

//função chamada uma vez quando a tela abre
        useEffect(() => {
        listar();
    })
    return(
        <Container>
            <Menu />
            <Conteudo>
                <CabecalhoClient />
                <ToastContainer />
                <LoadingBar color=" #E911C6" ref={loading} />
                <div className="tabelas_input"> 
                    <div className="box-cadastrar"> 
                                <div className="titulo"> 
                                    <div className="barra2"> </div>
                                    <div> <b>{idAlterando === 0 ? "Novo Produto" : "Alterando Produto" + idAlterando }</b> </div>
                                </div>

                                <div className="container-form">  
                                
                                    <div className="form">
                                        <div className="label" > Nome: </div>
                                        <input className="input"type="text" value={nome} onChange={e => setNome(e.target.value)} ></input>
                                    </div>
                                    <div className="form">
                                        <div className="label" >PreçoDE:</div>
                                        <input className="input"type="text" value={precoDe} onChange={e => setPrecoDe(e.target.value)}></input>
                                    </div>
                                    <div className="form">
                                        <div className="label">Categoria:</div>
                                        <input className="input" type="text" value={categoria} onChange={e => setCategoria(e.target.value)}></input>
                                    </div>
                                    <div className="form">
                                        <div className="label" >PreçoPOR:</div>
                                        <input className="input"type="text" value={precoPor} onChange={e => setPrecoPor(e.target.value)}></input>
                                    </div>
                                    <div className="form">
                                        <div className="label" >Avaliação:</div>
                                        <input className="input"type="text" value={avaliacao} onChange={e => setAvaliacao(e.target.value)}></input>
                                    </div>
                                    <div className="form">
                                        <div className="label">Quantidade:</div>
                                        <input className="input" type="text" value={quantidade} onChange={e => setQuantidade(e.target.value)}></input>
                                    </div>
                                    <div className="form-maior">
                                        <div className="label" >LInk da imagem:</div>
                                        <input className="input"type="text" value={imagem} onChange={e => setImagem(e.target.value)}></input>
                                    </div>
                                    <div className="form-maior">
                                        <div className="label">Descrição:</div>
                                        <textarea type="text" value={descricao} onChange={e => setDescricao(e.target.value)}></textarea>
                                    </div>
                                
                                    <button className="btn-cadastrar" onClick={inserir}>{idAlterando === 0 ? "Cadastrar" : "Alterar"} </button>
                                </div>
                        </div>

                            <div className="box-cadastrados"> 
                                <div className="titulo"> 
                                    <div className="barra2"> </div>
                                    <div> Produtos Cadastrados</div>
                                </div>

                                <table className ="tabela">
                                <thead>
                                    <tr>
                                        <th className="titulos"> Imagem</th>
                                        <th className="titulos"> ID </th>
                                        <th className="titulos"> Nome </th>
                                        <th className="titulos"> Categoria </th>
                                        <th className="titulos"> PrecoPor </th>
                                        <th className="titulos"> Avaliacao </th>
                                        <th className="titulos"> Quantidade </th>
                                        <th className="campo-acao"> </th>
                                        <th className="campo-acao"> </th>
                                    </tr>
                                </thead>

                            
                    
                                <tbody>
                                    {produtos.map((item, i) =>
                            
                                        <tr className={i % 2 === 0 ? "linha-alternada" : ""}>
                                            <td className="imagem-table"> <img src={item.img_produto} alt=""/> </td>
                                            <td> {item.id_produto} </td>
                                            <td title={item.nm_produto}> {item.nm_produto != null && item.nm_produto.length >= 25
                                                    ? item.nm_produto.substr(0, 25) + '...'
                                                    : item.nm_produto}
                                            </td>
                                            <td> {item.ds_categoria} </td>
                                            <td> {item.vl_preco_por} </td>
                                            <td> {item.vl_avaliacao} </td>
                                            <td> {item.qtd_estoque} </td>
                                            <td className="campo-acao"> <button onClick={() => alterar(item)} > <img src="assets/images/edit.svg" alt="" /> </button> </td>
                                            <td className="campo-acao"> <button onClick={() => remover(item.id_produto)}> <img src="assets/images/excluir.svg" alt="" /> </button> </td> 
                                        </tr>

                                    )}
                                </tbody>
                            
                            </table>
                        
                            </div>
                        
                        </div>
            </Conteudo>
        </Container>
    )
}