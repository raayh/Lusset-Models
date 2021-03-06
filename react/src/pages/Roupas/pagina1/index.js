import { Container } from "./styled";
import Cabecalho from "../../../components/cabecalho/index";
import Rodape from "../../../components/rodape/index";

import { useEffect, useState } from "react";
import Produto from '../../../components/box-home'
// import { CarouselConfig } from "../../detalhes roupa/carouselconfig";
import { Link } from 'react-router-dom';

import Api from '../../../service/api';
const api = new Api();

export default function Roupas () {
    // const loading = useRef(null);
  
    const [roupasf, setRoupasf] = useState([])
  
    
    useEffect(() => {
        listar();
           }, [] );

       async function listar(){
         let r = await api.listar();
         setRoupasf(r);     
        }


    return(
        <Container> 
            <Cabecalho/> 

            <div className="superior">  Roupas </div>
            <div className="linha"> <img src="/assets/images/Line 21.jpg" alt=""/> </div>

            <div className="conteudo-principal">
                <div className="lateral-tudo">                           
                    <div className="lateral">
                        <div className="item-L"> Categorias </div> <br/>
                        <div className="item-L"> Sobre </div>      <br/> 
                        <div className="item-L-x"> Roupas </div>     <br/> 
                        <Link to={{pathname:"/roupas2"}}>   
                        <div className="item-L-X"> Roupas Masculinas </div> <br/>
                        </Link>
                        <Link to={{pathname:"/roupas"}}> 
                        <div className="item-L-X"> Roupas Femininas </div> <br/>
                        </Link>
                        <div className="item-L"> Acessorios </div> <br/>
                        <div className="item-L"> Marcas </div> <br/>
                        <div className="item-L"> Calçados </div> <br/>
                        
                        
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
                        <select > 
                            <option value="filtro-D"> </option>
                            <option value="filtro-D"> Novidades </option>
                            <option value="filtro-D"> Extras </option>
                        </select>
                        <select > 
                            <option value="filtro-D"> </option>
                            <option value="filtro-D"> 24 </option>
                            <option value="filtro-D"> 25 </option>
                        </select>
                    </div>    
                            <div className="encaixotado">
                                
                                    
                                <div className="box">
                                    <div className="conteudo-corpo"> 
                                        
                                        {roupasf.filter(i => i.ds_genero === 'Feminino').map(i =>
                                            <Produto produto={i} display="block" />
                                        )}

                                     </div>
                                </div>

                            </div>
                        <div className="filtro"> </div>    
                </div>               
            </div>
            <Rodape/> 
        </Container>
    );
}
     

            