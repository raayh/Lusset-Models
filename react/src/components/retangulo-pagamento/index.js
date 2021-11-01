import { Container } from "./styled";

export default function RetanguloPagamento() {
  return (
    <Container>
      <div className="quad2">
        <div className="div-quad2">
          <div className="area-detalhes">
            <div className="foto-roupa">
              <img src="/assets/images/jaqueta-sarja.jpg" alt="" />
            </div>
            <div className="detalhes-produto">
              <div className="nome-jaqueta">
                JAQUETA SARJA VERSE LIMITED WARZONE BEGE
              </div>
              <div>P</div>
            </div>
          </div>

          <div className="linha-separacao">
            <img src="/assets/images/linha-separacao.jpg" alt="" />
          </div>

          <div className="area-desconto">
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Código de desconto"
            />
            <button type="submit">Aplicar</button>
          </div>

          <div className="linha-separacao2">
            <img
              src="/assets/images/linha-separacao.jpg"
              alt="linha-separacao2"
            />
          </div>

          <div className="Subtotal">
            <div className="margin">Subtotal</div>
            <div className="margin">R$ 199,98</div>
          </div>
          <div className="Frete">
            <div className="margin">Frete</div>
            <div className="margin">R$ 0,00</div>
          </div>
          <div className="Desconto">
            <div>Desconto</div>
            <div>R$ 0,00</div>
          </div>

          <div className="linha-separacao3">
            <img
              src="/assets/images/linha-separacao.jpg"
              alt="linha-separacao3"
            />
          </div>

          <div className="Total">
            <div>Total</div>
            <div>R$ 199,98</div>
          </div>
        </div>
      </div>
    </Container>
  );
}
