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
                                <div> - </div>
                                <div> 1 </div>
                                <div> + </div>
                            </div>
                            
                            <div className="preco-roupa"> R$ 119,90  </div>

                        </div>

                    </div>

                    <div className="barra1"> </div>

                    <div className=""> 

                        <div className="cont-esquerda"> 
                            <img src="/assets/images/Seta.svg" alt=""/> 
                            <div> Voltar e Navegar na Loja </div>
                        </div>

                        <div className="cont-direita"> 
                            <div> </div>
                            <div> </div>
                            <div> </div>
                            <div> </div>

                            <div className="barra2"> </div>

                            <div> </div>
                            <div> </div>
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