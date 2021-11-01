import {Container, Conteudo} from "./cart.styled"

export default function Cart(){
    return(
        <Container>
            <Conteudo >
            <div className="cabecalho">   </div>

            <div className="box"> 

                <div className="box-esquerda"> 
                    
                    <div className="titulo"> 

                        <div className="texto-titulo"> <b>CARRINHO DE COMPRAS </b></div>
                        <div className="barra-titulo"> </div>

                    </div>

                    <div className="roupa">

                        <div className="parte1"> 
                            
                            <img src="/assets/images/image 15.png" alt="" />
                            <div className="texto-roupa"> Boné Dad Hat Aba Curva Branco <br/> <br/> Kace Logo  </div>
                            <div> x </div>

                        </div>
                        
                        <div className="parte2">
                            
                            <div className="qtd-roupa"> 
                                <div  className="operador"> - </div>
                                <div className="numero"> 1 </div>
                                <div className="operador"> + </div>
                            </div>
                            
                            <div className="preco-roupa"> <b>R$ 119,90</b>  </div>

                        </div>

                    </div>

                    

                    <div className="detalhes"> 
                        
                        <div className="barra">  <div className="barra1"> </div> </div>
                        
                        <div className="cont-esquerda"> 
                            <img src="/assets/images/Seta.svg" alt=""/> 
                            <div> Voltar e Navegar na Loja </div>
                        </div>

                        <div className="cont-direita"> 

                            <div className="grupo">
                                <div className="texto"> Itens </div> 
                                <div className="valor"> <b>R$ 119,90</b> </div>
                            </div>

                            <div className="grupo">
                                <div className="texto"> Frete </div> 
                                <div className="valor">  -- </div>
                            </div>

                                <div className="barra2"> </div>

                            <div className="grupo">
                                <div className="texto"> SUBTOTAL </div>
                                <div className="valor">  <b>R$ 119,90</b> </div>
                            </div>

                        </div>

                    </div>
                
                </div>

                <div className="box-direita"> 
                    
                    <div className="simulação">
                        
                        <div className="titulo"> </div>
                        <input></input>
                        <button></button>

                    </div>

                    <div>

                        <div className="titulo"> </div>
                        
                        <div className="pagamento">

                           <img> </img>
                           <div className="texto-pagamento"> </div>                

                        </div>
                        
                        <div className="pagamento">
                            
                           <img> </img>
                           <div className="texto-pagamento">  </div>

                        </div>

                        <div className="pagamento">

                            <img> </img>
                            <div className="texto-pagamento">  </div>

                        </div>

                        <div className="cupom">

                            <img> </img>
                            <div className="texto-cupom"> </div>

                        </div>

                        <button> </button>
                        
                        <div className="security">
                            
                            <div className="texto-security"></div>
                            <img></img>

                        </div>

                    </div>
                </div>
            </div>

        </Conteudo>

        </Container>
    )
}