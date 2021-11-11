import { Container } from "./styled";
import Cabecalho from "../../../components/cabecalho/index";
import Rodape from "../../../components/rodape/index";
import 'react-multi-carousel/lib/styles.css'

// import Api from '../../../service/api';
// const api = new Api();

export default function Roupas () {
    return(
        <Container> 
            <Cabecalho> </Cabecalho>

            <div className="superior">  Roupas </div>
            <div className="linha"> <img src="/assets/images/Line 21.jpg" alt=""/> </div>

            <div className="conteudo-principal">
                <div className="lateral-tudo">                           
                    <div className="lateral">
                        <div className="item-L"> Categorias </div> <br/>
                        <div className="item-L"> Sobre </div>      <br/> 
                        <div className="item-L-x"> Roupas </div>     <br/> 
                        <div className="item-L-X"> Acessorios </div> <br/>
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
                                        <div className="item"> <img src = "../../assets/images/roxo.jpg" alt=""/> </div>
                                        <div className="descricao-item"> Calça Jogger Tactel Corta Vento <br/> Snake Violeta Kace </div>
                                        <div className="preço-item"> R$199,90 </div>
                                        <div className="botão"> <button> Ver Mais </button> </div>
                                    </div>
                                    
                                    <div className="conteudo-corpo">
                                        <div className="item"> <img src = "../../assets/images/michelangelo.jpg" alt=""/> </div>
                                        <div className="descricao-item"> Camiseta Michelangelo Creazione <br/> di Adamo Preta Kace </div>
                                        <div className="preço-item"> R$109,98 </div>
                                        <div className="botão"> <button> Ver Mais </button> </div>
                                    </div>
                                    <div className="conteudo-corpo">    
                                        <div className="item"> <img src = "../../assets/images/shortkace.jpg" alt=""/> </div>                                                 
                                        <div className="descricao-item"> Short Logo Preto Kace </div>
                                        <div className="preço-item"> R$149,89 </div>
                                        <div className="botão"> <button> Ver Mais </button> </div>
                                    </div>                                                          
                                </div>

                                
                                <div className="box">
                                    <div className="conteudo-corpo"> 
                                        <div className="item"> <img src = "../../assets/images/calçafeia.jpg" alt=""/> </div>
                                        <div className="descricao-item"> Calça Jogger Verce Cargo Warzone <br/> Bege </div>
                                        <div className="preço-item"> R$199,90 </div>
                                        <div className="botão"> <button> Ver Mais </button> </div>
                                    </div>
                                    <div className="conteudo-corpo">
                                        <div className="item"> <img src = "../../assets/images/starter.jpg" alt=""/> </div>
                                        <div className="descricao-item"> Camisa Manga Curta Starter <br/> Logo St Amarelo </div>
                                        <div className="preço-item"> R$99,90 </div>
                                        <div className="botão"> <button> Ver Mais </button> </div>
                                    </div>
                                    <div className="conteudo-corpo">
                                        <div className="item"> <img src = "../../assets/images/kings.jpg" alt=""/> </div>                                                 
                                        <div className="descricao-item"> Camiseta Masculina Street King <br/> Preta/Cinza </div>
                                        <div className="preço-item"> R$44,95 </div>
                                        <div className="botão"> <button> Ver Mais </button> </div>
                                    </div>
                                    
                                </div>

                                
                                <div className="box">
                                    
                                    <div className="conteudo-corpo"> 
                                        <div className="item"> <img src = "../../assets/images/carinhas.jpg" alt=""/> </div>
                                        <div className="descricao-item"> Camiseta Mental Health Branca <br/> Kace  </div>
                                        <div className="preço-item"> R$99,90 </div>
                                        <div className="botão"> <button> Ver Mais </button> </div>
                                    </div>    
                                    <div className="conteudo-corpo">    
                                        <div className="item"> <img src = "../../assets/images/marmore.jpg" alt=""/> </div>
                                        <div className="descricao-item"> Camiseta Logo Marmorizada Tie <br/> Dye Preta Kace </div>
                                        <div className="preço-item"> R$149,90 </div>
                                        <div className="botão"> <button> Ver Mais </button> </div>
                                    </div>    
                                    <div className="conteudo-corpo">    
                                        <div className="item"> <img src = "../../assets/images/kacelistrada.jpg" alt=""/> </div>
                                        <div className="descricao-item"> Camiseta com Listras Verticais <br/> Coloridas Masculinas Kace </div>
                                        <div className="preço-item"> R$129,90 </div>
                                        <div className="botão"> <button> Ver Mais </button> </div>
                                    </div>
                                </div>    

                                
                                <div className="box">
                                    
                                    <div className="conteudo-corpo"> 
                                        <div className="item"> <img src = "../../assets/images/negrao.jpg" alt=""/> </div>
                                        <div className="descricao-item"> Camiseta Manga Curta Verse Wig <br/> Flew Rosa  </div>
                                        <div className="preço-item"> R$69,90 </div>
                                        <div className="botão"> <button> Ver Mais </button> </div>
                                    </div>    
                                    <div className="conteudo-corpo">
                                        <div className="item"> <img src = "../../assets/images/tiedye.jpg" alt=""/> </div>
                                        <div className="descricao-item"> Camiseta Manga Curta Verse Tie <br/> Dye 1 </div>
                                        <div className="preço-item"> R$99,90 </div>
                                        <div className="botão"> <button> Ver Mais </button> </div>
                                    </div>
                                    <div className="conteudo-corpo">
                                        <div className="item"> <img src = "../../assets/images/adidas.jpg" alt=""/> </div>
                                        <div className="descricao-item"> Camiseta Manga Curta Adidas <br/> 3 Listras Branca </div>
                                        <div className="preço-item"> R$149,90 </div>              
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
     

            