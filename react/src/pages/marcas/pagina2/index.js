import { Container } from "./styled";
import Cabecalho from "../../../components/cabecalho/index";
import Rodape from "../../../components/rodape/index";

import { useEffect, useState } from "react";
import Produto from '../../../components/box-home'
// import { CarouselConfig } from "../../detalhes roupa/carouselconfig";

import Api from '../../../service/api';
const api = new Api();


export default function Marcas2 () {
    // const loading = useRef(null);
  
    const [marcas, setMarcas] = useState([])
  
       async function listar(){
         let r = await api.listar5();
         setMarcas(r);     
        }

        useEffect(() => {
        listar();
           });


    return(
        <Container> 
            <Cabecalho> </Cabecalho>

            <div className="superior">  Linhas Fila </div>
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
                    <div className="box">
                                   
                                    
                                   {marcas.map(i =>
                                   
                                   <div className="conteudo-corpo">
                                       <Produto roupasf={i} display={i.marcas !== 'fila'
                                                         ? 'none'
                                                         : 'visible'} />
                                       <div className="item"> {i.img_produto} </div>
                                       <div className="descricao-item"> {i.nm_produto} </div>
                                       <div className="preço-item"> {i.vl_preco_por} </div>
                                       <div className="botão"> <button> Ver Mais </button> </div>
                                   </div>

                                   )}
                                   
                               </div>
                        <div className="filtro"> </div>    
                </div>               
            </div>
            <Rodape> </Rodape>
        </Container>
    );
}
     

            