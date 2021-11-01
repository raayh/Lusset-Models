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
          <div className= "etapa-azul">Frete {">"}</div>
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

        <div className="titu-pagamento">Pagamento</div>
         
        <div className="subtitulo">Todas as transações são seguras e criptografadas</div>
        
        <div className="area-pagamento">
          <div className="caixa1">
              <div className="pague-com">Pague Com</div>
              <div className="bandeiras-cartao">
                  <img src="" alt="" />
                  <img src="" alt="" />
                  <img src="" alt="" />
                  <img src="" alt="" />
              </div>
          </div>
          <div className="caixa2">
              <div className="cartao-boleto">
                  <div className="cartao">Cartão de Credito</div>
                  <div className="boleto">Boleto</div>
              </div>
              <div className="prenchimento">
                <div className="conj1-input">
                    <input type="text" placeholder="Nº Cartão" />
                    <input type="text" placeholder="Cód.Segurança" />
                </div>
                <div className="conj2-input">
                    <input type="text" placeholder="Nome" />
                    <input type="text" placeholder="CPF" />
                </div>
                <div className="conj3-input">
                    <input type="text" placeholder="Data de Nascimento" />
                    <input type="text" placeholder="Telefone" />
                </div>
                <div className="conj4-input">
                    <input type="text" placeholder="Mês de Vencimento" />
                    <input type="text" placeholder="Ano de Vencimento" />
                </div>
                <div className="unid5-input">
                    <select required>
                        <option value="" disabled selected> Nº de vezes </option>
                        <option value="1x">1x sem juros</option>
                        <option value="2x">2x sem juros</option>
                        <option value="3x">3x sem juros</option>
                        <option value="4x">4x sem juros</option>
                        <option value="5x">5x sem juros</option>
                        <option value="6x">6x sem juros</option>
                    </select>
                </div>
              </div>
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
