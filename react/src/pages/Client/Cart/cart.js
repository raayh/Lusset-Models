import  {Container} from "../styled"
import {Conteudo} from "./cart.styled"

export default function Cart(){
    return(
        <Container>
            <Conteudo >
            <div className="cabecalho">   </div>

            <div className="box-esquerda"> 
                
                <div className="titulo"> 

                    <div> </div>
                    <div> </div>

                </div>

                <div className="roupa">

                    <div className="desc-roupa"> 
                        <div> </div>
                        <div> </div>
                        <div> </div>
                        <div> </div>
                    </div>

                    <div className="qtd-roupa"> 
                    
                    </div>

                </div>

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
                        <div> </div>
                        <div> </div>
                        <div> </div>
                    </div>

                </div>

            </div>

            <div className="box-direita"> 

            </div>

        </Conteudo>

        </Container>
    )
}