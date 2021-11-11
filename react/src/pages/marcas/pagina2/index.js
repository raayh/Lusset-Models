import { Container } from "./styled";
import Cabecalho from "../../../components/cabecalho/index";
import Rodape from "../../../components/rodape/index";
import 'react-multi-carousel/lib/styles.css'

export default function Marcas2 () {
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
                            <div className="encaixotado">
                                    
                                <div className="box">
                                    <div className="conteudo-corpo"> 
                                        <div className="item"> <img src = "../../assets/images/+tchuka.jpg" alt=""/> </div>
                                        <div className="descricao-item"> Blusa Time Feminina </div>
                                        <div className="preço-item"> R$109,90 </div>
                                        <div className="botão"> <button> Ver Mais </button> </div>
                                    </div>
                                    
                                    <div className="conteudo-corpo">
                                        <div className="item"> <img src = "../../assets/images/paraguai.jpg" alt=""/> </div>
                                        <div className="descricao-item"> Tênis Fila Classic Runner SI <br/> Masculino </div>
                                        <div className="preço-item"> R$279,98 </div>
                                        <div className="botão"> <button> Ver Mais </button> </div>
                                    </div>
                                    <div className="conteudo-corpo">    
                                        <div className="item"> <img src = "../../assets/images/branquela.jpg" alt=""/> </div>                                                 
                                        <div className="descricao-item"> Vestido Sport Club WI <br/> Feminino </div>
                                        <div className="preço-item"> R$249,89 </div>
                                        <div className="botão"> <button> Ver Mais </button> </div>
                                    </div>                                                          
                                </div>

                                
                                <div className="box">
                                    <div className="conteudo-corpo"> 
                                        <div className="item"> <img src = "../../assets/images/oreia.jpg" alt=""/> </div>
                                        <div className="descricao-item"> Camiseta Molten Masculina  </div>
                                        <div className="preço-item"> R$179,90 </div>
                                        <div className="botão"> <button> Ver Mais </button> </div>
                                    </div>
                                    <div className="conteudo-corpo">
                                        <div className="item"> <img src = "../../assets/images/passadinha.jpg" alt=""/> </div>
                                        <div className="descricao-item"> Camisa Sport Club Wi <br/> Masculina </div>
                                        <div className="preço-item"> R$129,90 </div>
                                        <div className="botão"> <button> Ver Mais </button> </div>
                                    </div>
                                    <div className="conteudo-corpo">
                                        <div className="item"> <img src = "../../assets/images/fazum4.jpg" alt=""/> </div>                                                 
                                        <div className="descricao-item"> Calça Authentic Feminina </div>
                                        <div className="preço-item"> R$199,90 </div>
                                        <div className="botão"> <button> Ver Mais </button> </div>
                                    </div>
                                    
                                </div>

                                
                                <div className="box">
                                    
                                    <div className="conteudo-corpo"> 
                                        <div className="item"> <img src = "../../assets/images/pezinho.jpg" alt=""/> </div>
                                        <div className="descricao-item"> Short Sport Blend Feminino  </div>
                                        <div className="preço-item"> R$139,90 </div>
                                        <div className="botão"> <button> Ver Mais </button> </div>
                                    </div>    
                                    <div className="conteudo-corpo">    
                                        <div className="item"> <img src = "../../assets/images/tchukassa.jpg" alt=""/> </div>
                                        <div className="descricao-item"> Casaco Comfortech Feminino  </div>
                                        <div className="preço-item"> R$159,90 </div>
                                        <div className="botão"> <button> Ver Mais </button> </div>
                                    </div>    
                                    <div className="conteudo-corpo">    
                                        <div className="item"> <img src = "../../assets/images/chave.jpg" alt=""/> </div>
                                        <div className="descricao-item"> Chinelo Fila Drifter Mesh <br/> Masculino </div>
                                        <div className="preço-item"> R$129,90 </div>
                                        <div className="botão"> <button> Ver Mais </button> </div>
                                    </div>
                                </div>    

                                
                                <div className="box">
                                    
                                    <div className="conteudo-corpo"> 
                                        <div className="item"> <img src = "../../assets/images/bahia.jpg" alt=""/> </div>
                                        <div className="descricao-item"> Tênis Fila Axilus 2 Energized Cc <br/> Masculino </div>
                                        <div className="preço-item"> R$599,90 </div>
                                        <div className="botão"> <button> Ver Mais </button> </div>
                                    </div>    
                                    <div className="conteudo-corpo">
                                        <div className="item"> <img src = "../../assets/images/tchuka.jpg" alt=""/> </div>
                                        <div className="descricao-item"> Casaco White Line Feminino  </div>
                                        <div className="preço-item"> R$229,90 </div>
                                        <div className="botão"> <button> Ver Mais </button> </div>
                                    </div>
                                    <div className="conteudo-corpo">
                                        <div className="item"> <img src = "../../assets/images/jakob.jpg" alt=""/> </div>
                                        <div className="descricao-item"> Blusão Fbox Hoodie || Unisex </div>
                                        <div className="preço-item"> R$199,90 </div>              
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
     

            