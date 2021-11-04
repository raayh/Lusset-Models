import { Container } from "./styled";
import Cabecalho from "../../components/cabecalho/index";
import Rodape from "../../components/rodape/index";

import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

import { useEffect, useState } from "react";
import Produto from '../../components/box-home'
import { CarouselConfig } from "./config";

export default function Home() {
  const [produtos, setProdutos] = useState([])
  function  listar(){
      const r = [
        {
          id: 10002,
          imagem: "/assets/images/tenis preto e verm dc.jpg",
          titulo: "teclado Gamer",
          preco: "R$ 1.350,00",
          desc: "Esse produto é muito legal e você deve comprá-lo porque sua vida será feliz!!!",
          categoria: "tenis"
        },
        {
          id: 10003,
          imagem: "/assets/images/tenis preto e verm dc.jpg",
          titulo: "Teclado Gamer",
          preco: "R$ 680,00",
          desc: "Esse produto é muito legal e você deve comprá-lo porque sua vida será feliz!!!",
          categoria: "tenis" 
        },
        {
          id: 10004,
          imagem: "/assets/images/tenis preto e verm dc.jpg",
          titulo: "teclado Gamer",
          preco: "R$ 12.584,00",
          desc: "Esse produto é muito legal e você deve comprá-lo porque sua vida será feliz!!!",
          categoria: "tenis"
        },
        {
          id: 10005,
          imagem: "/assets/images/tenis preto e verm dc.jpg",
          titulo: "Poltrona Gamer",
          preco: "R$ 1.350,00",
          desc: "Esse produto é muito legal e você deve comprá-lo porque sua vida será feliz!!!",
          categoria: "tenis"
        },
        {
          id: 10006,
          imagem: "/assets/images/tenis preto e verm dc.jpg",
          titulo: "Poltrona Gamer",
          preco: "R$ 680,00",
          desc: "Esse produto é muito legal e você deve comprá-lo porque sua vida será feliz!!!",
          categoria: "bone" 
        },
        {
          id: 10007,
          imagem: "https://http2.mlstatic.com/D_NQ_NP_755842-MLB47599396706_092021-O.webp",
          titulo: "Poltrona Gamer",
          preco: "R$ 12.584,00",
          desc: "Esse produto é muito legal e você deve comprá-lo porque sua vida será feliz!!!",
          categoria: "acessorio"
        },
        {
          id: 10008,
          imagem: "/assets/images/tenis preto e verm dc.jpg",
          titulo: "Poltrona Gamer",
          preco: "R$ 1.350,00",
          desc: "Esse produto é muito legal e você deve comprá-lo porque sua vida será feliz!!!",
          categoria: "bone"
        },
      ]

      setProdutos(r)
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
          <Produto produto={i} display={i.categoria !== '...'? 'none': 'visible'}/>
         )}
        </div>

        <div className="acessorios">Acessórios</div>
        <div className="prod-acessorios">
          
         {produtos.map(i => 
          <Produto produto={i} display={i.categoria !== 'acessorio'? 'none': 'visible'}/>
         )}
          
        </div>
        <div className="tenis">Tênis</div>
        <div className="prod-tenis">
        <Carousel responsive={CarouselConfig} className="carousel-container">
        {produtos.map(i => 
          <Produto produto={i} />
         )}
         </Carousel>
        </div>
      </div>
      <Rodape />
    </Container>
  );
}
