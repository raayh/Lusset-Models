import { Container } from "./styled";
import Cabecalho from "../../components/cabecalho/index";
import Rodape from "../../components/rodape/index";
import Carousel from "react-multi-carousel";
import 'react-multi-carousel/lib/styles.css'
import { CarouselConfig } from "./carouselconfig";

export default function DetalhesProduto() {
  return (
    <Container>
      <Cabecalho></Cabecalho>
      <div class="quad-1">
        <div class="angulos">
          <div>
            <img src="../../assets/images/bermuda-rosa-1.jpg" alt="" />
          </div>
          <div>
            <img src="../../assets/images/bermuda-rosa-2.jpg" alt="" />
          </div>
          <div>
            <img src="../../assets/images/bermuda-rosa-3.jpg" alt="" />
          </div>
          <div>
            <img src="../../assets/images/bermuda-rosa-4.jpg" alt="" />
          </div>
        </div>

        <div class="foto">
          <img src="../../assets/images/bermuda-rosa-0.jpg" alt="" />
        </div>

        <div class="area-decidir">
          <div class="logo-desc">
            <div class="logo-marca">
              <img src="../../assets/images/logo-verse.jpg" alt="" />
            </div>
            <div class="descricao">SHORT VERSE LIMITED BASED ROSA</div>
          </div>
          <div>Alta qualidade.</div>
          <div>Tamanho padrão e na cor Rosa.</div>
          <div>Tamanho</div>
          <div class="medidas">
            <div class="P">P</div>
            <div class="M">M</div>
            <div class="G">G</div>
            <div class="GG">GG</div>
          </div>
          <div class="juros">
            {" "}
            <b>R$ 119,98</b> em até 6x de R$ 20,00 sem juros
          </div>
          <div class="cartao-e-formas">
            <div class="cartao-img">
              <img src="../../assets/images/cartao.jpg" alt="" />
            </div>
            <div>Formas de Pagamento</div>
          </div>
          <button class="botão-comprar">Comprar</button>
          <div class="area-frete">
            <div class="Inserir CEP">Insira o CEP</div>
            <input type="text"></input>
            <button>Calcular</button>
          </div>
          <div>
            <img src="/assets/images/linha.jpg" alt="" />
          </div>
          <div>COMPARTILHE ESTE PRODUTO</div>
        </div>
      </div>
      <div class="linha-separação">
        <img src="../../assets/images/linha2.jpg" alt="" />
      </div>
      <div class="quad2">
        <div class="quad2-titulo">
          <b>DESCRIÇÃO PRODUTO</b>
        </div>
        <div class="linha-separação2">
          <img src="../../assets/images/linha3.jpg" alt="" />
        </div>
        <div>
          {" "}
          <p>
            <b>O SHORT VERSE LIMITED BASED ROSA</b> é ideal para os dias quentes
            e que pedem uma peça mais leve e confortável.
          </p>
          <p>
            Confeccionando em tecido fresco e com um ótimo corte, esse SHORT
            VERSE LIMITED BASED ROSA possui estampa discreta, super básica e
            <br />
            ajuste na cintura através de elástico e cordão, proporcionando um
            dia mais confortável.
          </p>
          <p>
            Além disso possui dois bolsos laterais e um traseiro, ideal para
            guardar pequenos objetos.
          </p>
          <p>
            <b>- Detalhes do produto</b>
          </p>
          <p>
            <b>- Gênero:</b> Masculino
            <br />
            <b>- Origem:</b> Nacional
            <br />
            <b>- Cor:</b> Rosa
            <br />
            <b>- Garantia:</b> contra defeitos de fabricações
            <br />
            <b>- Composição:</b> 100% poliéster
          </p>
          <p>
            <b>- TABELA DE MEDIDAS</b>
          </p>
          Tamanho P - 45 cm de altura e 36 cm de largura
          <br />
          Tamanho M - 47cm de altura e 37 cm de largura
          <br />
          Tamanho G - 48 cm de altura e 38 cm de largura
          <br />
          Tamanho GG - 51 cm de altura e 38 cm de largura
        </div>
      </div>
      <div class="linha-separação3">
        <img src="../../assets/images/linha2.jpg" alt="" />
      </div>
      <div>
        <b>VEJA TAMBÉM</b>
      </div>
  
        <div class="previas-produto">
        
        <Carousel
        responsive={CarouselConfig}
        infinite={true}
        containerClass="carousel-container"
        showDots={true}
        >
          <div class="box-previa">
            <div class="imagem-previa">
              <img src="../../assets/images/bone-preto-hocks.jpg" alt="" />
            </div>
            <div class="desc-previa"> Boné Aba Curva Hocks Fili Preto Snap</div>
            <div class="valor-previa">R$ 119,98</div>
            <button class="botao-previa">Comprar</button>
          </div>
          
          <div class="box-previa">
            <div class="imagem-previa">
              <img src="../../assets/images/tenis-OUS-azul.jpg" alt="" />
            </div>
            <div class="desc-previa"> Tênis ous OAMF Azul e Vermelho</div>
            <div class="valor-previa">R$ 279,98</div>
            <button class="botao-previa">Comprar</button>
          </div>
          
          <div class="box-previa">
            <div class="imagem-previa">
              <img src="../../assets/images/calça nylon.jpg" alt="" />
            </div>
            <div class="desc-previa">
              Calça Nylon Ipermeável Branca Logo Klace
            </div>
            <div class="valor-previa">R$ 249,90</div>
            <button class="botao-previa">Comprar</button>
          </div>
          
          <div class="box-previa">
            <div class="imagem-previa">
              <img src="../../assets/images/vestido-sportclub.jpg" alt="" />
            </div>
            <div class="desc-previa"> Vestido Sport Club WI Feminino</div>
            <div class="valor-previa">R$ 249,90</div>
            <button class="botao-previa">Comprar</button>
          </div>
          
          </Carousel>
        </div>
        
        <Rodape></Rodape>
    </Container>
  );
}
