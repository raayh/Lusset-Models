import styled from 'styled-components'

const Container = styled.div`
    display: flex;
    flex-direction: row;

    justify-content: space-between;

    width: 100%;
    padding: 17px 35px 21px 35px;

    background: #001F54;
    box-shadow: 0px 0px 4px 1px rgba(186, 186, 186, 0.25);

    font-family: 'Montserrat', sans-serif;

 .cabecalho-esquerda{
    display: flex;
    flex-direction: row;
 }

.texto1{
    display: flex;
    justify-content: flex-start;
    
    font-size: .8em;

    color: white;
}

button{
    display: flex;
    justify-content: flex-end;

    align-items: flex-end;

    border: none;

    background: #001F54;
    color: white;
}

.texto-botão{
    font: Montserrat 700 .8em;
}

`

export {Container}