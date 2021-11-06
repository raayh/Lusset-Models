import Menu from '../../../components/Menu/menu'
import Cabecalho from '../../../components/Cabecalho/Cabecalho-Client/index'

import { Link } from 'react-router-dom'
import { Container, Conteudo } from './styled'

export default function Pedido(){
    return(
        <Container>
            <Menu />
            <Conteudo>
                <Cabecalho />
                <div className="container-box"> 
                    
                    <div className="titulo"> 
                        <div className="texto"> <b>Últimos pedidos</b> </div>
                        <div className="barra-titulo"> </div>
                    </div>     

                    <div className="box"> 

                         <div className="cabecalho">
                            
                            <div> <b>Pedido: 1285 </b></div>

                            <div className="barra"> </div>
                      
                            <div className="detalhe-roupa">
                                
                                <img src="/assets/images/image 15.png" alt="" />
                                <div className="texto-roupa"> Boné Dad Hat Aba Curva Branco <br/> <br/> <br/> Kace Logo  </div>
                                <div className="preco-roupa"> R$ 119,90  </div>
                            
                            </div>

                        </div>

                        <div className="barra2"> </div>

                        <div className="status-roupa">
                            
                            <div className="titulo-status"> 
                                <div className="texto-status"> <b>Status</b> </div>
                                <div className="barra-status"> </div>
                            </div> 
                            
                            <div className="texto"> <b>Realizado dia:</b> dd/mm/aa </div>

                            <br/>

                            <div className="texto"> Pedido <span>em espera</span> </div>

                            <Link to={{
                                pathname: '/carrinho',
                                // state: props.info
                            }}>  
                            <button> Ver no carrinho</button>
                            </Link>
                               
                        </div>

                    </div>

                    <div className="box"> 

                        <div className="cabecalho">
                        
                        <div> <b>Pedido: 1285 </b></div>

                        <div className="barra"> </div>

                        <div className="detalhe-roupa">
                            
                            <img src="/assets/images/image 15.png" alt="" />
                            <div className="texto-roupa"> Boné Dad Hat Aba Curva Branco <br/> <br/> <br/> Kace Logo  </div>
                            <div className="preco-roupa"> R$ 119,90  </div>
                        
                        </div>

                        </div>

                        <div className="barra2"> </div>

                        <div className="status-roupa">
                        
                        <div className="titulo-status"> 
                            <div className="texto-status"> <b>Status</b> </div>
                            <div className="barra-status"> </div>
                        </div> 
                        
                        <div className="texto"> <b>Realizado dia:</b> dd/mm/aa </div>

                        <br/>

                        <div className="texto"> Pedido <span>em espera</span> </div>

                        <button> Ver no carrinho</button>

                            
                        </div>

                    </div>

                    <div className="box"> 

                        <div className="cabecalho">
                        
                        <div> <b>Pedido: 1285 </b></div>

                        <div className="barra"> </div>

                        <div className="detalhe-roupa">
                            
                            <img src="/assets/images/image 15.png" alt="" />
                            <div className="texto-roupa"> Boné Dad Hat Aba Curva Branco <br/> <br/> <br/> Kace Logo  </div>
                            <div className="preco-roupa"> R$ 119,90  </div>
                        
                        </div>

                        </div>

                        <div className="barra2"> </div>

                        <div className="status-roupa">
                        
                        <div className="titulo-status"> 
                            <div className="texto-status"> <b>Status</b> </div>
                            <div className="barra-status"> </div>
                        </div> 
                        
                        <div className="texto"> <b>Realizado dia:</b> dd/mm/aa </div>

                        <br/>

                        <div className="texto"> Pedido <span>em espera</span> </div>

                        <button> Ver no carrinho</button>

                            
                        </div>

                    </div>
                    
                    
                
                </div>
            </Conteudo>
        </Container>
    )
}