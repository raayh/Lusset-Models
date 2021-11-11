import { Container } from "./styled";
import Cabecalho from "../../components/Cabecalho/index";
import Rodape from "../../components/rodape/index";

import Produto from '../../components/box-home'
import { useEffect, useState } from "react";

import 'react-multi-carousel/lib/styles.css'

import Api from '../../service/api';
const api = new Api();

export default function Acessorios () {
    const [acessorios, setAcessorios] = useState([])

    async function listar() {
        let r = await api.listar4();
        setAcessorios(r);
    }

    useEffect(() => {
        listar();
    });


    return(
        <Container> 
            <Cabecalho> </Cabecalho>

            <div className="superior">  Acessorios </div>
            <div className="linha"> <img src="../../assets/images/Line 21.jpg" alt=""/> </div>

            <div className="conteudo-principal">
                <div className="lateral-tudo">                           
                    <div className="lateral">
                        <div className="item-L"> Categorias </div> <br/>
                        <div className="item-L"> Sobre </div>      <br/> 
                        <div className="item-L"> Roupas </div>     <br/> 
                        <div className="item-L-x"> Acessorios </div> <br/>
                        <div className="item-L-X">  Bonés/Chapéus </div> <br/>
                        <div className="item-L-X"> - Meias </div> <br/>
                        <div className="item-L-X"> - Mascaras </div> <br/>
                        <div className="item-L-X"> - Outros </div> <br/>
                        <div className="item-L-X"> - Marcas </div> <br/>
                        <div className="item-L-X"> - Calçados </div> <br/>
                    </div>
                    <div className="lateral-baixo">    
                        <div className="item-L-Baixo"> + Cores </div> <br/>
                        <div className="item-L-Baixo"> + Tamanho </div> <br/>
                        <div className="item-L-Baixo"> + Numeração </div> <br/>
                        <div className="item-L-Baixo"> + Marcas </div> <br/>
                        <div className="item-L-Baixo"> + Faixas de Preço </div> 
                    </div>
                </div>           

                <div className="catalogo">  
                    <div className="seleção">   
                        <select id="filtro1"> 
                            <option value="filtro-D"> </option>
                            <option value="filtro-D"> Novidades </option>
                            <option value="filtro-D"> Extras </option>
                        </select>
                        <select id= "filtro2" > 
                            <option value="filtro-D"> </option>
                            <option value="filtro-D"> 24 </option>
                            <option value="filtro-D"> 25 </option>
                        </select>
                    </div>    
                            <div className="encaixotado">
                                <div className="titulo-corpo"> Bonés/Chapéus </div>    
                                <div className="box">
                                    <div className="conteudo-corpo"> 
                                        {acessorios.map(i => 
                                        <Produto acessorios={i} display={i.categoria !== 'Bonés/Chapéus'
                                                                                        ? 'none'
                                                                                        : 'visible'} />
                                        )}
                                    </div>                                                       
                                </div>

                                <div className="titulo-corpo"> Meias </div>
                                <div className="box">
                                <div className="conteudo-corpo"> 
                                        {acessorios.map(i => 
                                        <Produto acessorios={i} display={i.categoria !== 'Meias'
                                                                                        ? 'none'
                                                                                        : 'visible'} />
                                        )}
                                    </div>      
                                    
                                </div>

                                <div className="titulo-corpo"> Mascaras </div>
                                <div className="box">
                                    
                                <div className="conteudo-corpo"> 
                                        {acessorios.map(i => 
                                        <Produto acessorios={i} display={i.categoria !== 'Mascaras'
                                                                                        ? 'none'
                                                                                        : 'visible'} />
                                        )}
                                    </div>      
                                </div>    

                                <div className="titulo-corpo"> Outros </div>
                                <div className="box">
                                    
                                <div className="conteudo-corpo"> 
                                        {acessorios.map(i => 
                                        <Produto acessorios={i} display={i.categoria !== 'Outros'
                                                                                        ? 'none'
                                                                                        : 'visible'} />
                                        )}
                                    </div>      
                                </div>
                            </div>
                        <div className="filtro"> </div>    
                </div>               
            </div>
            <Rodape> </Rodape>
        </Container>
    );
}
     

            