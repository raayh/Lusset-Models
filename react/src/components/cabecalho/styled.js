import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;

  .cabecalho {
    display: flex;
    flex-direction: column;
    background-color: #001f54;
    color: white;
    width: 100%;
  }

  .cima {
    display: flex;
    flex-direction: row;
    margin: 1.2em;
    justify-content: space-between;
  }

  .baixo {
    display: flex;
    flex-direction: row;
    margin: 0.6em 5em 2em 5em;
    justify-content: space-between;
  }

  .lusett {
    font-size: 4em;
    font-family: Montserrat400, sans-serif;
    text-shadow: 0.1em 0.1em 0.05em #1282a2;
    margin-right: 1em;
  }

  .icone-menu img {
    min-width: 2em;
  }

  .texto-cabecalho {
    font-size: 1.5em;
  }

  .icone-lupa {
    margin-left: 50px;
    margin-right: -70px;
  }

  .icone-carrinho,
  .icone-lupa img {
    width: 1.5em;
  }

  .cabecalho img {
    max-width: 2em;
    width: auto;
  }

  .texto-cabecalho {
    font-size: 1.5em;
  }
`;
export { Container };
