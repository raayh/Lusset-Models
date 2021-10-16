import {Container} from './menu.styled';

export default function Menu(){
    return(
        <Container>
             
             <div className="logo"> 
                <div className="texto-logo"> Lusset Models </div>
            </div>

            <div className="bloco-vazio"> </div>
            <div className="bloco-vazio2"> </div>

            <div className="linha"></div>

            <div className="menu-info"> 

                <div className="imagem"> <img src="/assets/images/Frame (2).svg" alt="" /> </div>
                <div className="texto-aluno"> Informações </div>
                
            </div>

            <div className="menu-produtos"> 
                
                <div className="imagem"> <img src="/assets/images/Frame (1).svg" alt=""/> </div>
                <div className="texto-ger"> Pedidos </div>

            </div> 

            <div className="linha"></div>


            <div className="linha"></div>
            
        </Container>
    )
}