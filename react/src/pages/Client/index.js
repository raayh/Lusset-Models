import Menu from '../../components/Menu/menu'
import Cabecalho from '../../components/cabecalho'
import { Container, Conteudo } from './styled';

import { Link } from 'react-router-dom'

// import Api from '../../service/api';
// const api = new Api();

export default function Cliente(){
    return(
        <Container>
            <Menu />
                <Conteudo>
                    <Cabecalho /> 
                    <div className="box"> 

                        <div className="box-esquerda">

                            <div className="barra-esquerda"> </div> 
                            
                            <div className="conteudo-esquerda">
                               
                                <div className="titulo-conteudo"> <b>INFORMAÇÕES DA SUA CONTA</b> </div>
                                
                                <div className="perfil"> 
                                    <div className="image"> <img  src="/assets/images/Boneco.svg" alt=""/> </div>
                                    <div className="texto-perfil"> <b>Rayssa Sacramento</b> </div>
                                    <div className="texto-perfil"> rayssasac04@gmail.com </div>
                                </div> 

                                <div className="rodape"> 

                                    <button className="texto"> <b>Editar Dados</b> </button>
                                    <div className="barra-rodape"> </div>
                                    <button className="texto"> <b>Alterar a Senha</b> </button>

                                </div>  

                            </div>

                        </div>
                           

                        

                        <div className="box-direita"> 


                            <div className="barra-direita"> </div>

                            <div className="conteudo-direita"> 
                            
                                    <div className="titulo-direita"> 
                                        
                                        <Link to={{pathname: '/pedido'}}> 
                                        <button className="texto-direita"> <b>Ultimos pedidos</b> </button>
                                        </Link>
                                        <div className="barra-titulo"> </div>

                                    </div>

                                    <div className="pedidos"> 
                                    
                                        <img src="/assets/images/Frame.svg" alt="" />
                                        <div className="texto-imagem"> Você não possui ultimos pedidos </div>
                                        

                                        <Link to={{
                                            pathname: '/carrinho',
                                            // state: props.info
                                        }}>    
                                        <button className="rota"> <b>Ir para o carrinho</b> </button>
                                        </Link>
                                    </div>
                            
                            </div>

                        </div>

                    </div>
                </Conteudo>
        </Container>
    )
}