import React from 'react';
import { Link } from 'react-router-dom';

import { Container } from './styled';

function Produto(props) {
  return(
    <Container > 
            <div className="img-produto">
              <img src={props.produto.img_produto} alt="" />
            </div>
            <div className="descricao">
              {props.produto.nm_produto}
            </div>
            <div className="valor">R${props.produto.vl_preco_por}</div>
            <Link to={{pathname:"/DetalhesProduto", state: props.produto}}> 
              <button className="detalhes">Detalhes</button>
            </Link>
    </Container>
  )
}

export default Produto;