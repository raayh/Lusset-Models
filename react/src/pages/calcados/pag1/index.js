import { Container } from "./styled";
import Cabecalho from "../../../components/cabecalho/index";
import Rodape from "../../../components/rodape/index";

import { useEffect, useState } from "react";
import Produto from '../../../components/box-home'
import { Link } from 'react-router-dom';

import Api from '../../../service/api';
const api = new Api();

export default function Calcados () {
    const [calcadosm, setcalcadosm] = useState([])
  
       async function listar(){
         let r = await api.listar();
         setcalcadosm(r);     
        }

        useEffect(() => {
        listar();
           });

    return(
        <Container> 
            <Cabecalho> </Cabecalho>

            <div className="superior">  Calçados Masculino </div>
            <div className="linha"> <img src="../../assets/images/Line 21.jpg"/> </div>

            <div className="conteudo-principal">
                <div className="lateral-tudo">                           
                    <div className="lateral">
                        <div className="item-L"> Categorias </div> <br/>
                        <div className="item-L"> Sobre </div>      <br/> 
                        <div className="item-L"> Roupas </div>     <br/>
                        <div className="item-L"> Acessorios </div>     <br/>
                        <div className="item-L"> Marcas </div> <br/>
                        <div className="item-L"> Calçados </div> <br/>
                        <Link to={{pathname:"/calcados"}}>   
                        <div className="item-L-X"> Calçados Masculinos </div> <br/>
                        </Link>
                        <Link to={{pathname:"/calcados2"}}> 
                        <div className="item-L-X"> Calçados Femininos </div> <br/>
                        </Link>
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
                                <div className="box">

                                        
                                    <div className="conteudo-corpo">
                                        
                                            {calcadosm.filter(i => i.ds_categoria === 'Tênis').map(i =>
                                                <Produto produto={i} display="block" />
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
     

            