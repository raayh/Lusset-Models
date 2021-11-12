import {Container} from './styled'

import { Link } from 'react-router-dom'

export default function CabecalhoClient(){
    return(
        <Container>
            <div class="cabecalho-esquerda"> 
        
                <img src="/assets/images/Seta_branca.svg" alt=""  height="23px" /> 
                <Link to={{pathname: '/Home'}}>  
                <button > Voltar e Navegar na Loja </button>
                </Link>

            </div>

            <div className="texto"> 
            <Link to={{pathname: '/Login'}}>
                <button > Sair da Conta</button> 
            </Link>
            </div>
        
                
        </Container>
    )
}