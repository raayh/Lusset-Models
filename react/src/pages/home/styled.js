import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  background-color: rgba(255, 255, 255, 0.986);

  .img-produto img {
    width: 13em;
    height: 14em;
  }

  .prod-lanca,
  .prod-tenis,
  .prod-acessorios {
    display: flex;
    flex-direction: row;
    text-align: center;
  }

  .imagem {
    text-align: center;
    color: white;
    background-image: url("https://images.unsplash.com/photo-1548123378-bde4eca81d2d?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8c3RyZWV0JTIwd2VhcnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80");
    background-repeat: no-repeat;
    background-attachment: fixed;
    background-size: 100% 40em;
  }
  /*sobre a empresa opaco*/
  .nome,

  .texto-loja {
    margin: 1em 2em 2em 2em;
    font-size: 3em;
    opacity: 0;
  }

  .lancamentos,
  .acessorios,
  .tenis {
    text-align: center;
    color: #001f54;
    font-size: 3.5em;
    margin: 1em 1em 0.8em 1em;
    text-shadow: 0.1px 0.1em 0.09em #4977bd;
  }

  .box {
    margin: 3em;
    width: 100%;
  }

  button {
    background-color: #1282a2;
    padding: 0.5em;
    margin-top: 1em;
    border-radius: 0.2em;
    width: 100%;
    align-items: flex-end;
    border-color: white;
  }

  .detalhes {
    align-items: flex-end;
    color: white;
    font-size: 1em;
  }

  .descricao,
  .valor {
    color: #1282a2;
    margin: 0.4em;
    font-size: 1.1em;
  }

  @media (max-height: 1300px) {
    .imagem {
      background-size: 100% 50em;
    }
    .texto-loja {
      margin: 1em 2em 0em 2em;
  }
`;

export { Container };
