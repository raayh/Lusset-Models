import { Container } from "./styled";
import {Link} from "react-router-dom";


export default function Cabecalho() {
  return (
    <Container>
      <div className="cabecalho">
        <div className="cima">
          <div className="icone-menu">
            <img src="/assets/images/MENU-ICONE.png" alt="" />{" "}
          </div>
          <div className="lusett">LUSSET</div>
          <div className="icone-usuario">
            <img src="/assets/images/BONECO.png" alt="" />{" "}
          </div>
        </div>
        <div className="baixo">
 
        <Link to={{pathname: '/sobre'}}>  
          <div className="texto-cabecalho">Sobre</div>
        </Link>

        <Link to={{pathname: '/roupas'}}>  
          <div className="texto-cabecalho">Roupas</div>
        </Link>

        <Link to={{pathname: '/acessorios'}}>  
          <div className="texto-cabecalho">Acessórios</div>
        </Link>

        <Link to={{pathname: '/marcas'}}>  
          <div className="texto-cabecalho">Marcas</div>
        </Link>
        
        <Link to={{pathname: '/calcados'}}>  
          <div className="texto-cabecalho"> Calçados</div>
        </Link> 


          <div className="icone-lupa">
            <img src="/assets/images/LUPA.png" alt="" />{" "}
          </div>
          <div className="icone-carrinho">
            <img src="/assets/images/shopping-cart.png" alt="" />{" "}
          </div>
        </div> 
      </div>
    </Container>
  );
}
