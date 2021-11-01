import { Container } from "./styled";

export default function Cabecalho() {
  return (
    <Container>
      <div className="cabecalho">
        <div className="cima">
          <div className="icone-menu">
            <img src="/assets/images/menu.jpg" alt="" />{" "}
          </div>
          <div className="lusett">LUSSET</div>
          <div className="icone-usuario">
            <img src="/assets/images/boneco.jpg" alt="" />{" "}
          </div>
        </div>
        <div className="baixo">
          <div className="texto-cabecalho">Sobre</div>
          <div className="texto-cabecalho">Roupas</div>
          <div className="texto-cabecalho">Acessórios</div>
          <div className="texto-cabecalho">Marcas</div>
          <div className="texto-cabecalho"> Calçados</div>
          <div className="icone-lupa">
            <img src="/assets/images/lupa.jpg" alt="" />{" "}
          </div>
          <div className="icone-carrinho">
            <img src="/assets/images/Carrinho (2).jpg" alt="" />{" "}
          </div>
        </div>
      </div>
    </Container>
  );
}
