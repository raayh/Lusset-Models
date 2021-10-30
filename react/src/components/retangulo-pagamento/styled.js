import styled from "styled-components";

const Container = styled.div`
  background-color: #0a112899;
  width: 59%;
  color: white;

  .area-detalhes {
    flex-direction: row;
    width: 100%;
    display: flex;
    font-size: 0.8em;
  }

  .foto-roupa {
    margin-right: 2em;
  }

  .Subtotal,
  .Frete,
  .Desconto,
  .Total {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    font-size: 1em;
  }

  .quad2 input[type="text"] {
    padding: 0.7em;
    width: 80%;
    margin-right: 0.6em;
  }

  .linha-separacao,
  .linha-separacao2,
  .linha-separacao3 {
    margin: 1.2em 1.5em;
  }

  .div-quad2 {
    margin: 4em 3em 0em 3em;
  }

  .area-desconto button {
    background-color: #0000005e;
    padding: 0.4em 0.6em 0.4em 0.6em;
    font-size: 0.8em;
    color: white;
  }

  .area-desconto {
    width: 100%;
    display: flex;
  }

  .margin {
    margin-bottom: 0.6em;
  }

  .nome-jaqueta {
    margin-bottom: 0.5em;
  }

  button {
    background-color: rgba(255, 255, 255, 0);
    border-color: rgba(255, 255, 255, 0);
    color: #1282a2;
    font-size: 1.2em;
    padding: 1em;
    cursor: pointer;
    display: inline-block;
    cursor: pointer;
    text-align: center;
    text-decoration: none;
    outline: none;
    border: none;
    border-radius: 2px;
  }

  button:active {
    box-shadow: 0 5px #666;
    transform: translateY(4px);
  }
`;

export { Container };
