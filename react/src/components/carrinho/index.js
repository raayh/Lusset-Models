import React from 'react';

import { Container } from './styled.js';

function carrinho() {
  return (
    <Container>
      <div className="roupa">

        <div className="parte1">

          <img src="/assets/images/image 15.png" alt="" />
          <div className="texto-roupa"> Boné Dad Hat Aba Curva Branco <br /> <br /> Kace Logo  </div>
          <div> x </div>

        </div>

        <div className="parte2">

          <div className="qtd-roupa">
            <div className="operador"> - </div>
            <div className="numero"> 1 </div>
            <div className="operador"> + </div>
          </div>

          <div className="preco-roupa"> <b>R$ 119,90</b>  </div>

        </div>

      </div>
    </Container>
  );
}

export default carrinho;