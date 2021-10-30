import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin: 3em 5em 6em 7em;

  .lusett {
    font-size: 3em;
    display: flex;
    justify-content: center;
  }

  .etapas {
    display: flex;
    flex-direction: row;
    justify-content: center;
  }

  .Enviar-novidades {
    display: flex;
    flex-direction: row;
  }

  .formulario {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    height: 100%;
    width: 100%;
  }

  .salvar-informações {
    display: flex;
    flex-direction: row;
  }

  .etapa-azul {
    color: #1282a2;
  }

  .quad1 input[type="text"] {
    padding: 1em;
    margin-bottom: 1em;
  }

  select {
    width: 10em;
    padding: 0.8em;
  }

  .boxestilo + label {
    display: block;
    margin: 0em;
    cursor: pointer;
    padding: 0.1em;
  }

  .boxestilo {
    display: none;
  }

  .boxestilo + label:before {
    content: "";
    border: 0.13em solid #000;
    border-radius: 0em;
    display: inline-block;
    width: 1em;
    height: 1em;
    padding-left: 0.2em;
    padding-bottom: 0.3em;
    margin-right: 0.2em;
    vertical-align: bottom;
    color: transparent;
    transition: 0.6s;
  }

  .boxestilo + label:active:before {
    transform: scale(0);
  }

  .boxestilo:checked + label:before {
    background-color: #1282a2;
    border-color: rgb(235, 235, 235);
    color: rgb(255, 255, 255);
  }

  .boxestilo:disabled + label:before {
    transform: scale(1);
    border-color: #aaa;
  }

  .boxestilo:checked:disabled + label:before {
    transform: scale(1);
    background-color: #bfb;
    border-color: #bfb;
  }

  .Email,
  .CEP,
  .Endereco,
  .Complemento,
  .Cidade input {
    width: 100%;
    display: flex;
  }

  .subtitulo {
    font-size: 1.5em;
    margin: 1em 0em 1em 0em;
  }

  .Nome-e-Sobrenome input,
  .Telefone-e-CPF input,
  .Bairro-e-Num input {
    width: 49.7%;
  }

  .div-select {
    width: 210px;
    overflow: hidden; /* Esconde o conteúdo que passar do tamanho especificado */
    margin-right: 2em;
  }

  .div-select select {
    background: url("../../assets/images/seta-para-baixo.png") no-repeat #1282a2; /* Imagem de fundo (Seta) */
    background-position: 180px center; /*Posição da imagem do background*/
    width: 270px; /* Tamanho do select, maior que o tamanho da div "div-select" */
    height: 48px; /* altura do select, importante para que tenha a mesma altura em todo os navegadores */

    font-size: 15px; /* Tamanho da Fonte */
    padding: 13px 20px 13px 12px; /* Configurações de padding para posicionar o texto no campo */
    color: #fff; /* Cor da Fonte */
    text-indent: 0.01px; /* Remove seta padrão do FireFox */
    text-overflow: ""; /* Remove seta padrão do FireFox */
  }

  select::-ms-expand {
    display: none;
    /* Remove seta padrão do IE*/
  }

  .Pais-e-Estado {
    display: flex;
    margin-bottom: 0.8em;
  }

  button {
    background-color: rgba(255, 255, 255, 0);
    border-color: rgba(255, 255, 255, 0);
    color: #1282a2;
    font-size: 1.2em;
    padding: 1em;
    cursor: pointer;
    display: inline-block;
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

  .botao-continuar button {
    background-color: #1282a2;
    color: white;
    margin-right: 0.5em;
  }

  .decisoes-botoes button {
    font-size: 1em;
  }

  .decisoes-botoes {
    display: flex;
    flex-direction: row;
    margin-top: 3.3em;
  }
`;

export { Container };
