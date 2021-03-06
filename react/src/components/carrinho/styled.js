import styled from 'styled-components';

export const Container = styled.div`
  .roupa{
        
      }
      
      .parte1{
          display: flex;
          flex-direction: row;
  
          align-items: space-around;
  
          padding-top: 2em;
      }
  
      .parte1 > img{
          width: 4em;
      }
  
      .texto-roupa{
          padding: .5em 18em 0em .5em;
      }
  
      .parte2{
          display: flex;
          flex-direction: row;
  
          justify-content: flex-end;
      }
  
      .qtd-roupa{
          display: flex;
          flex-direction: row;
  
          padding-right: 5em;
          align-items: center;
          
      }
  
      .operador{
          color: #1282A2;
          font-size: 25px;
      }
  
      .numero{
          border: 1px solid #1282A2;
  
          padding: .5px 18px;
          margin: 0px 15px;
      }
  
      .preco-roupa{
  
      }
  
      .detalhes{
  
      }
  
      .barra{
          display: flex;
          flex-direction: column;
      }
  
      .barra1{
          margin: 1.5em 0em 1.5em 0em;
  
          width: 100%;
          
          border: .2px solid #C5C8C9;
  
          border-radius: .4em;
          
      }
  
      .cont-esquerda{
          display: flex;
          flex-direction: row;
  
          color: #B1B2B3;
  
          padding-left: .6em;
      }
  
      .cont-esquerda > img{
          opacity: 36%;
  
          padding-right: .6em;
      }
  
      .cont-direita{
          display: flex;
          flex-direction: column;
  
          padding-left: 23.5em;
          
          margin-top: -1.2em;
      }
  
      .grupo{
          display: flex;
          flex-direction: row;
      }
  
      .texto{
          width: 3em;
  
          color: #B1B2B3;
      }
  
      .valor{
          padding-left: 9em;
      }
  
      .barra2{
  
      }
`;
