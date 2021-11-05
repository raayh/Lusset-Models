import { Container } from "./styled";
import Cabecalho from "../../../components/cabecalho/index";
import Rodape from "../../../components/rodape/index";
import 'react-multi-carousel/lib/styles.css'

export default function Acessorios () {
    return(
        <Container> 
            <Cabecalho> </Cabecalho>

            <div className="superior">  Linhas Fila </div>
            <div className="linha"> <img src="../../assets/images/Line 21.jpg"/> </div>

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
                                        <div className="item"> <img src = "../../assets/images/bone.branco.png"/> </div>
                                        <div className="descricao-item"> Boné Dad Hat Aba Curva Branco <br/> Kace Logo </div>
                                        <div className="preço-item"> R$119,90 </div>
                                        <div className="botão"> <button> Ver Mais </button> </div>
                                    </div>
                                    
                                    <div className="conteudo-corpo">
                                        <div className="item"> <img src = "../../assets/images/bone.rosa.png"/> </div>
                                        <div className="descricao-item"> Boné Aba Curva Hocks Lettering <br/> Rosa Strap</div>
                                        <div className="preço-item"> R$119,98 </div>
                                        <div className="botão"> <button> Ver Mais </button> </div>
                                    </div>
                                    <div className="conteudo-corpo">    
                                        <div className="item"> <img src = "../../assets/images/bucket.png"/> </div>                                                 
                                        <div className="descricao-item"> Chapéu Bucket Verse Limited <br/> Dupla Face Gótico Preto</div>
                                        <div className="preço-item"> R$69,89 </div>
                                        <div className="botão"> <button> Ver Mais </button> </div>
                                    </div>                                                          
                                </div>

                                <div className="titulo-corpo"> Meias </div>
                                <div className="box">
                                    <div className="conteudo-corpo"> 
                                        <div className="item"> <img src = "../../assets/images/meia.fila.png"/> </div>
                                        <div className="descricao-item"> Boné Dad Hat Aba Curva Branco <br/> Kace Logo </div>
                                        <div className="preço-item"> R$119,90 </div>
                                        <div className="botão"> <button> Ver Mais </button> </div>
                                    </div>
                                    <div className="conteudo-corpo">
                                        <div className="item"> <img src = "../../assets/images/meia.vermelha.png"/> </div>
                                        <div className="descricao-item"> Boné Dad Hat Aba Curva Branco <br/> Kace Logo </div>
                                        <div className="preço-item"> R$119,90 </div>
                                        <div className="botão"> <button> Ver Mais </button> </div>
                                    </div>
                                    <div className="conteudo-corpo">
                                        <div className="item"> <img src = "../../assets/images/meia.verse.png"/> </div>                                                 
                                        <div className="descricao-item"> Boné Dad Hat Aba Curva Branco <br/> Kace Logo </div>
                                        <div className="preço-item"> R$119,90 </div>
                                        <div className="botão"> <button> Ver Mais </button> </div>
                                    </div>
                                    
                                </div>

                                <div className="titulo-corpo"> Mascaras </div>
                                <div className="box">
                                    
                                    <div className="conteudo-corpo"> 
                                        <div className="item"> <img src = "../../assets/images/precoceira.png"/> </div>
                                        <div className="descricao-item"> Boné Dad Hat Aba Curva Branco <br/> Kace Logo </div>
                                        <div className="preço-item"> R$119,90 </div>
                                        <div className="botão"> <button> Ver Mais </button> </div>
                                    </div>    
                                    <div className="conteudo-corpo">    
                                        <div className="item"> <img src = "../../assets/images/mascara.preta.png"/> </div>
                                        <div className="descricao-item"> Boné Dad Hat Aba Curva Branco <br/> Kace Logo </div>
                                        <div className="preço-item"> R$119,90 </div>
                                        <div className="botão"> <button> Ver Mais </button> </div>
                                    </div>    
                                    <div className="conteudo-corpo">    
                                        <div className="item"> <img src = "../../assets/images/macara.azul.png"/> </div>
                                        <div className="descricao-item"> Boné Dad Hat Aba Curva Branco <br/> Kace Logo </div>
                                        <div className="preço-item"> R$119,90 </div>
                                        <div className="botão"> <button> Ver Mais </button> </div>
                                    </div>
                                </div>    

                                <div className="titulo-corpo"> Outros </div>
                                <div className="box">
                                    
                                    <div className="conteudo-corpo"> 
                                        <div className="item"> <img src = "../../assets/images/pochete.png"/> </div>
                                        <div className="descricao-item"> Boné Dad Hat Aba Curva Branco <br/> Kace Logo </div>
                                        <div className="preço-item"> R$119,90 </div>
                                        <div className="botão"> <button> Ver Mais </button> </div>
                                    </div>    
                                    <div className="conteudo-corpo">
                                        <div className="item"> <img src = "../../assets/images/luva.png"/> </div>
                                        <div className="descricao-item"> Boné Dad Hat Aba Curva Branco <br/> Kace Logo </div>
                                        <div className="preço-item"> R$119,90 </div>
                                        <div className="botão"> <button> Ver Mais </button> </div>
                                    </div>
                                    <div className="conteudo-corpo">
                                        <div className="item"> <img src = "../../assets/images/anel.png"/> </div>
                                        <div className="descricao-item"> Boné Dad Hat Aba Curva Branco <br/> Kace Logo </div>
                                        <div className="preço-item"> R$119,90 </div>              
                                        <div className="botão"> <button> Ver Mais </button> </div>                                                     
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
     

            