import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  background-color: rgba(255, 255, 255, 0.986);

  .quad-1 {
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    margin: 4em 0em 2em 0em;
    width: 100%;
  }

  .medidas {
    display: flex;
    flex-direction: row;
    justify-content: start;
  }

  .linha-separação {
    margin: 3em 0em 4em 0em;
  }

  .quad2 {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-bottom: 2.8em;
  }

  .linha-separação2 {
    margin: 1em 0em 2em 0em;
  }
  .linha-separação3 {
    margin: 3em 0em 3em 0em;
  }

  .linha-separacao0 {
    margin-top: -1em;
    margin-left: 3em;
  }
  .cartao-e-formas {
    display: flex;
    flex-direction: row;
  }

  .area-frete {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin: -0.5em 0em -0.5em 0em;
  }

  .logo-desc {
    display: flex;
    flex-direction: row;
  }
 

  .quad-1 button {
    background-color: #1282a2;
    padding: 0.5em;
    margin-top: 1em;
    border-radius: 0.2em;
    width: 100%;
    align-items: flex-end;
    border-color: white;
    color: white;
  }

  .botao-previa {
    background-color: #1282a2;
    padding: 0.5em;
    margin-top: 1em;
    border-radius: 0.2em;
    width: 100%;
    align-items: flex-end;
    border-color: white;
    color: white;
  }

  .botão-comprar {
    font-size: 1.2em;
    margin-top: 0em;
    padding: 0.6em 0em 0.6em 0em;
  }

  .area-frete button {
    width: 8em;
    margin-bottom: 1.1em;
    padding-top: 10px;
  }

  input {
    height: 2.4em;
    width: 10em;
    margin: 0px;
  }

  .area-frete input {
      margin: 0px 1.7em 0px 0px;
  }
  .CEP {
    margin-left: 0em;
    margin-right: 1em;
  }

  .area-decidir {
    justify-content: space-between;
    display: flex;
    flex-direction: column;
  }

  .box-previa {
    margin: 0em 2em 0em 2em;
  }

  .compartilhe {
    margin-left: 4.2em;
    color: #1282a2;
  }

  .cartao-img {
    margin-right: 0.4em;
  }

  .logo-marca {
    margin-right: 0.4em;
  }

  .form {
    margin: 0em;
    justify-content: start;
  }

  .P,
  .M,
  .G,
  .GG {
    margin: 0em;
    margin-left: 2em;
    margin-right: 2em;
  }

  .tamanho {
    font-size: 1.1em;
  }

  .previas-produto {
    display: flex;
    flex-direction: row;
    margin: 3em 0em 6em 0em;
    text-align: center;
    width: 100%;
    height: 21em;
  }

  .carousel-container {
    width: 100%;
    height: 21em;
  }
`;

export { Container };
