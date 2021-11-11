import { Container } from "./styled";
import Cabecalho from "../../components/Cabecalho/index";
import Rodape from "../../components/rodape/index";

import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

import { useEffect, useState } from "react";
import Produto from '../../components/box-home'
import { CarouselConfig } from "../detalhes roupa/carouselconfig";

export default function Home() {
  const loading = useRef(null);
  
  const [produtos, setProdutos] = useState([])

  function  listar(){
     async function listar(){
       let r = await api.listar();
       setProdutos(r);     
      }
  }

  useEffect(() => {
   listar();
  });
  return (
    <Container>
      <Cabecalho />
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
        {produtos.map(i => 
          <Produto produto={i} display={i.categoria !== 'lancamento'
                                                          ? 'none'
                                                          : 'visible'} />
         )}
        </div>

        <div className="acessorios">Acessórios</div>
        <div className="prod-acessorios">
          
         {produtos.map(i => 
          <Produto produto={i} display={i.categoria !== 'acessorio'
                                                         ? 'none'
                                                         : 'visible'} />
         )}
          
        </div>
        <div className="tenis">Tênis</div>
        <div className="prod-tenis">
        <Carousel responsive={CarouselConfig} className="carousel-container">
        {produtos.map(i => 
          <Produto produto={i} display={i.categoria !== 'tenis'
                                                         ? 'none'
                                                         : 'visible'} />
         )}
         </Carousel>
        </div>
      </div>
      <Rodape />
    </Container>
  );
}
