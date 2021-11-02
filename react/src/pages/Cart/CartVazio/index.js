import {Container, Carrinho_Vazio} from "./styled"

export default function CartVazio(){
    return(
        <Container>
            <Carrinho_Vazio>
                <div> 
                    <div className="box-vazia1"></div>
                    <div className="box-vazia2"></div>
                    <div className="box-vazia3"></div>
                </div>

                <div>
                    <div className="titulo"> <b>OPS</b> <span>!</span> <br /> SEU CARRINHO ESTÁ VAZIO!</div>
                    <div className="subtitulo"> Mas não desanime! Busque agora, encontre o produto que você procura e depois clique no botão “Comprar” na página de produto.</div>
                    <input type="text" className="pesquisa" placeholder="O que você procura?" /> 
                    <button> BUSCAR </button>
                    
                   
                </div> 
                
                <img src="/assets/images/Seta.svg" alt=""/> 
                <div> Voltar e Navegar na Loja </div>

            </Carrinho_Vazio>
        </Container>
    )
}