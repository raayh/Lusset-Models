import {Link} from "react-router-dom"
import {Container} from './styled'

export default function TelaRotas(){
    return(
        <Container>
           <Link to="/Login"> <button> LOGIN </button> </Link>  
           <Link to="/cadastrar"> <button> CADASTRE-SE </button> </Link>  
           <Link to="/home"> <button> HOME </button> </Link>  
           <Link to="Sobre"> <button> SOBRE </button> </Link>  
           <Link to="/roupas"> <button> ROUPAS </button> </Link>  
           <Link to="/roupas2"> <button> ROUPAS(PARTE 2)</button> </Link>  
           <Link to="/acessorios"> <button> ACESSÓRIOS </button> </Link>  
           <Link to="/marcas"> <button> MARCAS </button> </Link>  
           <Link to="/marcas2"> <button> MARCAS II </button> </Link>  
           <Link to="/calcados"> <button> CALÇADOS </button> </Link>  
           <Link to="/calcados"> <button> CALÇADOS(PARTE 2) </button> </Link>  
           <Link to="/DetalhesProduto"> <button> DETALHES </button> </Link>  
           <Link to="/PagamentoInfo"> <button> PAGAMENTO (PARTE 1) </button> </Link>  
           <Link to="/PagamentoFrete"> <button> PAGAMENTO (PARTE 2) </button> </Link>
           <Link to="/Pagamento"> <button> PAGAMENTO (PARTE 3) </button> </Link>    
           <Link to="/Cliente"> <button> CLIENTE </button> </Link>  
           <Link to="/pedido"> <button> CLIENTE - PEDIDOS </button> </Link>  
           <Link to="/carrinho"> <button> CARRINHO </button> </Link>  
           <Link to="/carrinho_vazio"> <button> CARRINHO VAZIO </button> </Link>  
           <Link to="/admin"> <button> ADMINISTRADOR </button> </Link>  
           {/* <Link to=""> <button> ADMINISTRADOR - PEDIDOS </button> </Link>  */}
        </Container>
    )
}