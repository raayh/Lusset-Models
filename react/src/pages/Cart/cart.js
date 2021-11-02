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
                    
                    <div className="simulacao">
                        
                        <div className="titulo"> SIMULE SEU FRETE E PRAZO </div>
                        <input type="text" className="informe seu cep" placeholder="Informe seu CEP" /> 
                        <button> SIMULAR </button>

                    </div>

                    <div className="formas-pagamento">

                        <div className="titulo"> CONDIÇÕES DE PAGAMENTO </div>
                        
                        <div className="pagamento">

                            <img src="/assets/images/Group (1).svg" alt="" />
                            <div className="texto-pagamento"> Pix <br /> <b>R$170,98</b> (5% OFF)</div>                

                        </div>
                        
                        <div className="pagamento">
                            
                           <img src="/assets/images/Group.svg" alt="" />
                           <div className="texto-pagamento"> Boleto Bancário <br /> <b>R$179,98</b> (5% OFF) </div>

                        </div>

                        <div className="pagamento">

                            <img src="/assets/images/CARTÃO.svg" alt="" />
                            <div className="texto-pagamento"> Cartão de crédito <br /> <b>R$179,98</b> <br /> até <b>6x</b> de <b>R$30,00</b> </div>

                        </div>

                        <div className="cupom">

                            <img src="/assets/images/mbrisale_99573 1.svg" alt="" />
                            <div className="texto-cupom"> <b>Possui cupom de desconto?</b>  <br /> Utilize-o na tela de pagamento.</div>

                        </div>

                        <button> FINALIZAR COMPRA </button>
                        
                        <div className="security">
                            
                            <div className="texto-security"> Ambiente 100% seguro </div>
                            <img src="/assets/images/Vector.svg" alt="" />

                        </div>

                    </div>
                </div>
            </div>

        </Conteudo>

        </Container>
    )
};
