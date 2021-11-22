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
         let r = await api.listar();
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
                        <div className="item-L"> Acessorios </div> <br/>
                        <div className="item-L-x" > Marcas </div> <br/>
                        <div className="item-L-X"> Fila </div> <br/>
                        <div className="item-L-X"> Monarch </div> <br/>
                        <div className="item-L-X"> Verse </div> <br/>
                        <div className="item-L-X"> KACE </div> <br/>
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
                                          
                                          {marcas.filter(i => i.nm_marca === 'Fila').map(i =>
                                            <Produto produto={i} display="block" />
                                        )}
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
     

            