import {Container, Carrinho_Vazio} from "./styled"

import { Link } from 'react-router-dom'

export default function CartVazio(){
    return(
        <Container>
            <Carrinho_Vazio>
                
                <div className="vazios"> 
                    <div className="box-vazia1"></div>
                    <div className="box-vazia2"></div>
                    <div className="box-vazia3"></div>
                </div>

                <div className="box">
                    
                    <div className="titulo"> <b>OPS</b> <span>!</span> <br /> SEU CARRINHO ESTÁ VAZIO!</div>
                    <div className="subtitulo"> Mas não desanime! Busque agora, encontre o produto que você procura e depois clique no botão “Comprar” na página de produto.</div>
                
                    <div className="pesquisa">   
                        <input type="text" className="pesquisa" placeholder="O que você procura?" /> 
                        <button> BUSCAR </button>
                    </div>

                    <div className="rodapé">
                       

                        <img src="/assets/images/Seta_preta.svg" alt="" color="black" height="23px" /> 
                        
                        <Link to={{pathname: '/cliente'}}>  
                        <div className="rota"> Voltar e Navegar na Loja </div>
                        </Link>

                    </div>

                </div> 

 


                
               
            </Carrinho_Vazio>
        </Container>
    )
}