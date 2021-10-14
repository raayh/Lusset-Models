import {Container} from './cabecalho.styled';

export default function Cabecalho(){
    return (
        <Container>
            
            <div className="cabecalho-esquerda">

                <div className="texto1">
                    <div> <img src="/assets/images/Seta.svg" alt=""/> </div>
                    <div> Voltar e Navegar na Loja </div>
                </div>

                <button> 
                    <div className="texto-botão"> 
                        <b>Sair da conta</b> 
                    </div>
                </button>
            </div>

        </Container>        
    )
}