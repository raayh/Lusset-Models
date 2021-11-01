import { Container } from "./styled";
import Cabecalho from "../../components/cabecalho/index";
import Rodape from "../../components/rodape/index";

export default function Home() {
  return (
    <Container>
      <Cabecalho></Cabecalho>
      <div className="imagem">
        <div className="nome">Lusett</div>
        <div className="texto-loja">
          “trabalhamos com o conforto e o futuro, nosso foco é a trazer
          expêriencias unícas com as roupas te fazer feliz com os melhores
          produtos no mercado, aqui você não saí apenas com sua roupa, mais sim
          com um estilo que vai ser diferencial aonde você for”.{" "}
        </div>
      </div>

      <div className="produtos">
        <div className="lancamentos">Lançamentos</div>
        <div className="prod-lanca">
          <div className="box">
            <div className="img-produto">
              <img src="/assets/images/moletom-preto.jpg" alt="" />{" "}
            </div>
            <div className="descricao">
              Moletom com Capuz Preto Lettering Kace
            </div>
            <div className="valor">R$ 289, 90</div>
            <button className="detalhes">Detalhes</button>
          </div>
          <div className="box">
            <div className="img-produto">
              <img src="/assets/images/calça jogger.jpg" alt="" />{" "}
            </div>
            <div className="descricao">
              Calça Jogger Verse Minimal Strip Preto
            </div>
            <div className="valor">R$ 149, 90</div>
            <button className="detalhes">Detalhes</button>
          </div>
          <div className="box">
            <div className="img-produto">
              <img src="/assets/images/calça nylon.jpg" alt="" />{" "}
            </div>
            <div className="descricao">
              Calça Nylon Ipermeável Branca Logo Klace
            </div>
            <div className="valor">R$ 249,90</div>
            <button className="detalhes">Detalhes</button>
          </div>
          <div className="box">
            <div className="img-produto">
              <img src="/assets/images/calça jeans.jpg" alt="" />{" "}
            </div>
            <div className="descricao">
              Calça Jeans Streetwear Cargo Folgada
            </div>
            <div className="valor">R$ 199,90</div>
            <button className="detalhes">Detalhes</button>
          </div>
        </div>

        <div className="acessorios">Acessórios</div>
        <div className="prod-acessorios">
          <div className="box">
            <div className="img-produto">
              <img src="/assets/images/touca diamond.jpg" alt="" />{" "}
            </div>
            <div className="descricao">
              Touca Masculina Curta Diamond White Bordada Swag
            </div>
            <div className="valor">R$ 79,90</div>
            <button className="detalhes">Detalhes</button>
          </div>
          <div className="box">
            <div className="img-produto">
              <img src="/assets/images/boné azul.jpg" alt="" />{" "}
            </div>
            <div className="descricao">
              Boné Aba Reta Five Panel com Bordado Frontal - Azul
            </div>
            <div className="valor">R$ 59,90</div>
            <button className="detalhes">Detalhes</button>
          </div>
          <div className="box">
            <div className="img-produto">
              <img src="/assets/images/boné preto.jpg" alt="" />{" "}
            </div>
            <div className="descricao">
              Boné New Era Aba Reta Fechado Mlb Ny Yankees Basic - Preto
            </div>
            <div className="valor">100,00</div>
            <button className="detalhes">Detalhes</button>
          </div>
          <div className="box">
            <div className="img-produto">
              <img src="/assets/images/mascaras.jpg" alt="" />{" "}
            </div>
            <div className="descricao">
              Máscara Chronic StreetWear - Preto e Branco
            </div>
            <div className="valor">20,00</div>
            <button className="detalhes">Detalhes</button>
          </div>
        </div>
        <div className="tenis">Tênis</div>
        <div className="prod-tenis">
          <div className="box">
            <div className="img-produto">
              <img src="/assets/images/tenid five blu.jpg" alt="" />{" "}
            </div>
            <div className="descricao">Tênis FiveBlu Dad Sneaker Azul/Rosa</div>
            <div className="valor">149,99</div>
            <button className="detalhes">Detalhes</button>
          </div>
          <div className="box">
            <div className="img-produto">
              <img src="/assets/images/dc shoes branco.jpg" alt="" />{" "}
            </div>
            <div className="descricao">Tênis DC Shoes Court Graffik Branco</div>
            <div className="valor">269,99</div>
            <button className="detalhes">Detalhes</button>
          </div>
          <div className="box">
            <div className="img-produto">
              <img src="/assets/images/tenis preto e verm dc.jpg" alt="" />{" "}
            </div>
            <div className="descricao"> Tênis DC Skateboard Preto/Vermelho</div>
            <div className="valor">349,90</div>
            <button className="detalhes">Detalhes</button>
          </div>
          <div className="box">
            <div className="img-produto">
              <img src="/assets/images/tenis quik silver.jpg" alt="" />{" "}
            </div>
            <div className="descricao">Tênis QuikSilver Style Cinza</div>
            <div className="valor">149,99</div>
            <button className="detalhes">Detalhes</button>
          </div>
        </div>
      </div>
      <Rodape></Rodape>
    </Container>
  );
}
