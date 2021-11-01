import { Container } from "./styled";

export default function Rodape() {
  return (
    <Container>
      <div className="rodape">
        <div className="cima-rodape">
          <div className="aba-sobre">
            <div className="sobre">Sobre</div>
            <div className="itens">
              <div>Sobre nós</div>
              <div>Sustentabilidade</div>
              <div>Loja Fisica</div>
            </div>
          </div>
          <div className="aba-ajuda">
            <div className="ajuda">Ajuda</div>
            <div className="itens">
              <div>Atendimento</div>
              <div>Frete & Entregas</div>
              <div>Devoluções</div>
              <div>Política de privacidade</div>
              <div>Marcas e fornecedores</div>
            </div>
          </div>
          <div className="aba-conta">
            <div className="conta">Conta</div>
            <div className="itens">
              <div>Minha Conta</div>
              <div>Meus Pedidos</div>
              <div>Meus Créditos</div>
            </div>
          </div>
        </div>
        <div className="baixo-rodape">
          <div className="icone-rodape">
            <img src="/assets/images/whatsapp.jpg" alt="" />
          </div>
          <div className="numero">(11)93734-3582</div>
          <div className="icone-rodape">
            <img src="/assets/images/instagram.jpg" alt="" />
          </div>
          <div className="insta">@lusett_model</div>
          <div className="icone-rodape">
            <img src="/assets/images/gmail.jpg" alt="" />
          </div>
          <div className="gmail">lusettmodel@gmail.com</div>
        </div>
      </div>
    </Container>
  );
}
