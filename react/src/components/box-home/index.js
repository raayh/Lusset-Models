import React from 'react';
import { Link } from 'react-router-dom';

import { Container } from './styled';

function boxHome(props) {
  return(
    <Container style={{display: props.display}}> 
            <div className="img-produto">
              <img src={props.produto.imagem} alt="" />{" "}
            </div>
            <div className="descricao">
              {props.produto.desc}
            </div>
            <div className="valor">R${props.produto.preco}</div>
            <Link to={{pathname:"/DetalhesProduto", state: props.produto}}> 
              <button className="detalhes">Detalhes</button>
            </Link>
    </Container>
  )
}

export default boxHome;