import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  .rodape {
    background-color: #001f54;
    margin-top: 1.8em;
    width: 100%;
  }

  .cima-rodape {
    display: flex;
    flex-direction: row;
    margin: 2em 8em 2em 8em;
    justify-content: space-between;
    color: white;
    font-size: 1em;
  }

  .baixo-rodape {
    display: flex;
    flex-direction: row;
    margin: 2em 0em 2em 7em;
    justify-content: space-between;
    color: white;
    font-size: 1em;
  }

  .baixo-rodape img {
    width: 1.5em;
  }

  .sobre,
  .ajuda,
  .conta {
    font-size: 1.5em;
    margin-bottom: 1em;
  }

  .gmail,
  .numero,
  .insta {
    margin: 0em 6em 0em -9em;
  }
`;

export { Container };
