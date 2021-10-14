import Menu from '../../components/Menu/menu'
import Cabecalho from '../../components/Cabecalho/cabecalho'
import { Container, Conteudo } from './styled';

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
                               
                                <div className="titulo-conteudo"> CARRINHO DE COMPRAS </div>
                                
                                <div className="perfil"> 
                                    <div className="image"> <img  src="/assets/images/Boneco.svg" alt=""/> </div>
                                    <div className="texto-perfil"> <b>Rayssa Sacramento</b> </div>
                                    <div className="texto-perfil"> <b>rayssasac04@gmail.com</b> </div>
                                </div> 

                                <div className="rodape"> 

                                    <div className="texto"> Editar Dados </div>
                                    <div className="barra-rodape"> </div>
                                    <div className="texto"> Alterar a Senha </div>

                                </div>  

                            </div>

                        </div>
                           

                        

                        <div className="box-direita"> 
                        
                            <div className="barra-direita"> </div>

                            <div className="conteudo-direita"> 
                            
                                    <div className="titulo-direita"> 
                                    
                                        <div className="texto-direita"> Ultimos pedidos </div>
                                        <div className="barra-titulo"> </div>

                                    </div>

                                    <div className="pedidos"> 
                                    
                                        <img src="/assets/images/Frame.svg" alt="" />
                                        <div className="texto-imagem"> Você não possui ultimos pedidos </div>
                                    
                                    </div>
                            
                            </div>

                        </div>

                    </div>
                </Conteudo>
        </Container>
    )
}