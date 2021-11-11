import { Container } from "./styled";
import Cabecalho from "../../../components/cabecalho/index";
import Rodape from "../../../components/rodape/index";
import 'react-multi-carousel/lib/styles.css'

export default function Roupas2 () {
    return(
        <Container> 
            <Cabecalho> </Cabecalho>

            <div className="superior">  Roupas Masculinas </div>
            <div className="linha"> <img src="../../assets/images/Line 21.jpg" alt=""/> </div>

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
                        <select> 
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
                                <div className="titulo-corpo"> Camisetas </div>    
                                <div className="box">
                                    <div className="conteudo-corpo"> 
                                        <div className="item"> <img src = "../../assets/images/laranja.jpg" alt=""/> </div>
                                        <div className="descricao-item"> Camiseta Manga Curta Verse <br/> Collab Rap In Cena Preto  </div>
                                        <div className="preço-item"> R$44,90 </div>
                                        <div className="botão"> <button> Ver Mais </button> </div>
                                    </div>
                                    
                                    <div className="conteudo-corpo">
                                        <div className="item"> <img src = "../../assets/images/sidoka.jpg" alt=""/> </div>
                                        <div className="descricao-item"> Camiseta Sidoka & Intactoz x <br/> Kace Preta </div>
                                        <div className="preço-item"> R$89,98 </div>
                                        <div className="botão"> <button> Ver Mais </button> </div>
                                    </div>
                                    <div className="conteudo-corpo">    
                                        <div className="item"> <img src = "../../assets/images/camisavans.jpg" alt=""/> </div>                                                 
                                        <div className="descricao-item"> Camiseta Vans Raglan  </div>
                                        <div className="preço-item"> R$130,89 </div>
                                        <div className="botão"> <button> Ver Mais </button> </div>
                                    </div>                                                          
                                </div>

                                <div className="titulo-corpo"> Bermudas </div>
                                <div className="box">
                                    <div className="conteudo-corpo"> 
                                        <div className="item"> <img src = "../../assets/images/atleta.jpg" alt=""/> </div>
                                        <div className="descricao-item"> Short Logo Violeta Kace  </div>
                                        <div className="preço-item"> R$149,90 </div>
                                        <div className="botão"> <button> Ver Mais </button> </div>
                                    </div>
                                    <div className="conteudo-corpo">
                                        <div className="item"> <img src = "../../assets/images/listrado.jpg" alt=""/> </div>
                                        <div className="descricao-item"> Bermuda Moletom Fila Block  <br/> Marinho </div>
                                        <div className="preço-item"> R$199,90 </div>
                                        <div className="botão"> <button> Ver Mais </button> </div>
                                    </div>
                                    <div className="conteudo-corpo">
                                        <div className="item"> <img src = "../../assets/images/short.jpg" alt=""/> </div>                                                 
                                        <div className="descricao-item"> Bermuda Vans Reta Primary <br/> Volley li Preta   </div>
                                        <div className="preço-item"> R$339,90 </div>
                                        <div className="botão"> <button> Ver Mais </button> </div>
                                    </div>
                                    
                                </div>

                                <div className="titulo-corpo"> Moleton </div>
                                <div className="box">
                                    
                                    <div className="conteudo-corpo"> 
                                        <div className="item"> <img src = "../../assets/images/blusavans.jpg" alt=""/> </div>
                                        <div className="descricao-item"> Moletom Flanelado Fechado <br/> Vans Classic Preto </div>
                                        <div className="preço-item"> R$259,90 </div>
                                        <div className="botão"> <button> Ver Mais </button> </div>
                                    </div>    
                                    <div className="conteudo-corpo">    
                                        <div className="item"> <img src = "../../assets/images/blusafila.jpg" alt=""/> </div>
                                        <div className="descricao-item"> Moleton Com Estampa de Logo e  <br/> Capuz </div>
                                        <div className="preço-item"> R$931 </div>
                                        <div className="botão"> <button> Ver Mais </button> </div>
                                    </div>    
                                    <div className="conteudo-corpo">    
                                        <div className="item"> <img src = "../../assets/images/roxo.jpg" alt=""/> </div>
                                        <div className="descricao-item"> Calça Jogger Tactel Corta Vento  <br/> Snake Violeta Kace  </div>
                                        <div className="preço-item"> R$199,90 </div>
                                        <div className="botão"> <button> Ver Mais </button> </div>
                                    </div>
                                </div>    

                                <div className="titulo-corpo"> Calças </div>
                                <div className="box">
                                    
                                    <div className="conteudo-corpo"> 
                                        <div className="item"> <img src = "../../assets/images/skate.jpg" alt=""/> </div>
                                        <div className="descricao-item"> Calça Sarja Vans Reta Authentic   <br/> Chino GI </div>
                                        <div className="preço-item"> R$449,90 </div>
                                        <div className="botão"> <button> Ver Mais </button> </div>
                                    </div>    
                                    <div className="conteudo-corpo">
                                        <div className="item"> <img src = "../../assets/images/milhao.jpg" alt=""/> </div>
                                        <div className="descricao-item"> Calça Masculina Esportiva <br/> Ace Básica Com Vivo Contrastante <br/> azul Marinho </div>
                                        <div className="preço-item"> R$59,90 </div>
                                        <div className="botão"> <button> Ver Mais </button> </div>
                                    </div>
                                    <div className="conteudo-corpo">
                                        <div className="item"> <img src = "../../assets/images/azul.jpg" alt=""/> </div>
                                        <div className="descricao-item"> Calça Jogger Verde Jeans  <br/> Marmorizado Azul </div>
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
     

            