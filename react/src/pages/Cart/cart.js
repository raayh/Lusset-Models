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
                            <div className="texto"> Itens </div> 
                            <div> <b>R$ 119,90</b> </div>
                            <div className="texto"> Frete </div> 
                            <div> -- </div>
                           
                            <div className="barra2"> </div>

                            <div className="texto"> SUBTOTAL </div>
                            <div> <b>R$ 119,90</b> </div>
                        </div>

                    </div>
                
                </div>

                <div className="box-direita"> 

                </div>
            </div>

        </Conteudo>

        </Container>
    )
}