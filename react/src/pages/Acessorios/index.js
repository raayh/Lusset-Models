import { Container } from "./styled";
import Cabecalho from "../../components/cabecalho/index";
import Rodape from "../../components/rodape/index";
import 'react-multi-carousel/lib/styles.css'

export default function Acessorios () {
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
                                        <div className="item"> <img src = "../../assets/images/dad.png"  alt=""/> </div>
                                        <div className="descricao-item"> Boné Dad Hat Aba Curva Branco <br/> Kace Logo </div>
                                        <div className="preço-item"> R$119,90 </div>
                                        <div className="botão"> <button> Ver Mais </button> </div>
                                    </div>
                                    
                                    <div className="conteudo-corpo">
                                        <div className="item"> <img src = "../../assets/images/dadrosa.jpg" alt=""/> </div>
                                        <div className="descricao-item"> Boné Aba Curva Hocks Lettering <br/> Rosa Strap</div>
                                        <div className="preço-item"> R$119,98 </div>
                                        <div className="botão"> <button> Ver Mais </button> </div>
                                    </div>
                                    <div className="conteudo-corpo">    
                                        <div className="item"> <img src = "../../assets/images/buck.jpg" alt=""/> </div>                                                 
                                        <div className="descricao-item"> Chapéu Bucket Verse Limited <br/> Dupla Face Gótico Preto</div>
                                        <div className="preço-item"> R$69,89 </div>
                                        <div className="botão"> <button> Ver Mais </button> </div>
                                    </div>                                                          
                                </div>

                                <div className="titulo-corpo"> Meias </div>
                                <div className="box">
                                    <div className="conteudo-corpo"> 
                                        <div className="item"> <img src = "../../assets/images/meias.jpg" alt=""/> </div>
                                        <div className="descricao-item"> Boné Dad Hat Aba Curva Branco <br/> Kace Logo </div>
                                        <div className="preço-item"> R$119,90 </div>
                                        <div className="botão"> <button> Ver Mais </button> </div>
                                    </div>
                                    <div className="conteudo-corpo">
                                        <div className="item"> <img src = "../../assets/images/meiasver.jpg" alt=""/> </div>
                                        <div className="descricao-item"> Boné Dad Hat Aba Curva Branco <br/> Kace Logo </div>
                                        <div className="preço-item"> R$119,90 </div>
                                        <div className="botão"> <button> Ver Mais </button> </div>
                                    </div>
                                    <div className="conteudo-corpo">
                                        <div className="item"> <img src = "../../assets/images/meiao.jpg" alt=""/> </div>                                                 
                                        <div className="descricao-item"> Boné Dad Hat Aba Curva Branco <br/> Kace Logo </div>
                                        <div className="preço-item"> R$119,90 </div>
                                        <div className="botão"> <button> Ver Mais </button> </div>
                                    </div>
                                    
                                </div>

                                <div className="titulo-corpo"> Mascaras </div>
                                <div className="box">
                                    
                                    <div className="conteudo-corpo"> 
                                        <div className="item"> <img src = "../../assets/images/pano.jpg" alt="" /> </div>
                                        <div className="descricao-item"> Boné Dad Hat Aba Curva Branco <br/> Kace Logo </div>
                                        <div className="preço-item"> R$119,90 </div>
                                        <div className="botão"> <button> Ver Mais </button> </div>
                                    </div>    
                                    <div className="conteudo-corpo">    
                                        <div className="item"> <img src = "../../assets/images/filapreta.jpg" alt=""/> </div>
                                        <div className="descricao-item"> Boné Dad Hat Aba Curva Branco <br/> Kace Logo </div>
                                        <div className="preço-item"> R$119,90 </div>
                                        <div className="botão"> <button> Ver Mais </button> </div>
                                    </div>    
                                    <div className="conteudo-corpo">    
                                        <div className="item"> <img src = "../../assets/images/mascarazul.jpg" alt=""/> </div>
                                        <div className="descricao-item"> Boné Dad Hat Aba Curva Branco <br/> Kace Logo </div>
                                        <div className="preço-item"> R$119,90 </div>
                                        <div className="botão"> <button> Ver Mais </button> </div>
                                    </div>
                                </div>    

                                <div className="titulo-corpo"> Outros </div>
                                <div className="box">
                                    
                                    <div className="conteudo-corpo"> 
                                        <div className="item"> <img src = "../../assets/images/pochete.jpg" alt=""/> </div>
                                        <div className="descricao-item"> Boné Dad Hat Aba Curva Branco <br/> Kace Logo </div>
                                        <div className="preço-item"> R$119,90 </div>
                                        <div className="botão"> <button> Ver Mais </button> </div>
                                    </div>    
                                    <div className="conteudo-corpo">
                                        <div className="item"> <img src = "../../assets/images/luva.jpg" alt=""/> </div>
                                        <div className="descricao-item"> Boné Dad Hat Aba Curva Branco <br/> Kace Logo </div>
                                        <div className="preço-item"> R$119,90 </div>
                                        <div className="botão"> <button> Ver Mais </button> </div>
                                    </div>
                                    <div className="conteudo-corpo">
                                        <div className="item"> <img src = "../../assets/images/anel.jpg" alt=""/> </div>
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
     

            