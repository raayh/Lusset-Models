import { Container } from "./styled";
import RetanguloPagamento from "../../components/retangulo-pagamento/index";

export default function PagamentoFrete() {
  return (
    <Container>
      <div className="quad1">
      <div className="lusett">LUSETT</div>
        <div className="etapas">
          <div className="etapa-azul">Carrinho {">"}</div>
          <div className="etapa-azul">Informações {">"}</div>
          <div>Frete {">"}</div>
          <div>Pagamento</div>
        </div>
        <div className="info-envio">
          <div className="info1">
            <div className="contato">Contato:</div>
            <input type="text" className="email" placeholder="E-mail"/>
            <div className="alterar">Alterar</div>
          </div>
          <div className="info2">
            <div className="enviar-para">Enviar-para:</div>
            <input type="text" className="endereco" placeholder="Endereço"/>
            <div className="alterar">Alterar</div>
          </div>
        </div>

        <div className="forma-frete">Forma de Frete</div>
        
        <div className="frete">
          
          <div className="forma1">
            <input type="checkbox"/>
            <span className="boxestilo"></span>
            <div className="grupo">
              <div className="PAC">PAC</div>
              <div className="dias">6 a 12 dias uteis</div>
            </div>            
            <div className="valor">--</div>
          </div>

          <div className="linha-separacao"></div>

          <div className="forma2">
            <input type="checkbox"/>
            <span className="boxestilo"></span>
            <div className="grupo">
              <div className="PAC">Sedex</div>
              <div className="dias">2 a 6 dias uteis</div>
            </div>
            <div className="valor">--</div>
          </div>
        </div>

        <div className="botoes">
          <button className="botao-continuar">Continuar com o Pagamento</button>
          <button className="botao-voltar">Voltar para o frete</button>
        </div>
      </div>
      <RetanguloPagamento></RetanguloPagamento>
    </Container>
  );
}
