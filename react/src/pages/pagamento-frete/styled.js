import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  background-color: #F5F5F5;

.quad1 {
  width: 100%;
  display: flex;
  flex-direction: column;
  margin: 3em 5em 3em 7em;
}

.info1, .info2 {
  display:flex;
  flex-direction:row;
  border: solid 2px;
  border-color: #808080;
  padding: 1em;
  width:100%;
  justify-content:space-between;
  align-items: center;
}

.info-envio input{
  border: none;
  width:75%;
  margin-left: 0em;
  padding: 0.5em 0em 0.5em 0em;
}

.info2 {
  border-top: 0px;
}

.info1 input {
  margin-left: 1.9em;
}

.info-envio input::placeholder {
  font-size: 1.1em;
}

textarea:focus, input:focus, select:focus {
  box-shadow: 0;
  border: 0 none;
  outline: 0;
} 

.forma1, .forma2 {
  display:flex;
  flex-direction:row;
  border: solid 2px;
  border-color: #808080;
  padding: 1em;
  width:100%;
  justify-content:space-between;
  align-items: center;
}

.forma2 {
  border-top: 0px;
}

.alterar {
  color: #1282a2;
}

.contato, .enviar-para {
  color: #4F4F4F;
  font-size: 1em;
}
.info-envio {
  margin-top: 4em;
  background-color: white;
  width:100%;
}
.forma-frete {
  margin: 4em 0em 2em 0em;
  font-size: 1.3em;
}
  .etapa-azul {
    color: #1282a2;
  }

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

  .frete {
    background-color: white;
    margin-bottom: 2.8em;
  }

  button {
    background-color: rgba(255, 255, 255, 0);
    border-color: rgba(255, 255, 255, 0);
    color: #1282a2;
    font-size: 1.1em;
    padding: 0.9em;
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

.botao-continuar {
  background-color: #1282a2;
  color: white;
}

.valor {
  color:#1282a2;
}

.grupo {
  margin-left: -28em;
  color: #363636;
}
  .frete input {
    position: absolute;
    opacity: 0;
    cursor: pointer;
    padding: 3em;
  }

  .boxestilo {
    background-color: #ccc;
    width: 25px;
    height: 25px;
    top:0;
    left:0px;
  }

  .frete input:checked ~ .boxestilo{
    background: #1282a2;
  }

  .frete .boxestilo:after{
    margin-top: 5px;
    margin-left: 9px;
    width: 5px;
    height: 10px;
    border: solid white;
    border-width: 0 3px 3px 0;
    -webkit-transform: rotate(45deg);
    -ms-transform: rotate(45deg);
    transform: rotate(45deg);
  }

  .boxestilo:after {
    content:"";
    display:none;
  }

  .frete input:checked ~ .boxestilo:after {
    display:block;
  }
`;

export { Container };
