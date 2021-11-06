import styled from 'styled-components';


const Container = styled.div`
    display: flex;
    flex-direction: row;
    
    min-width: 100vh;
    height: 100vh;
    
    font-family: 'Montserrat', sans-serif;
` 
const Conteudo = styled.div`
     .cabecalho{
        background-color: #1282A2;

        height: 8em;
        width: 85em;
    }

    .box{
        display: flex;
        flex-direction: row;

        justify-content: space-evenly;
    }

    .box-esquerda{

    }

    .titulo{
        margin-top: 3em;
    }

    .texto-titulo{
 
    }

    .barra-titulo{
        border: 1px solid #1282A2;
        border-radius: .4em;

        margin: .2em 0em 0em .3em;

        width: 2em;
    }

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











    .box-direita{
        display: flex;
        flex-direction: column;

        width: 24em;
        height: 47em;

        border-radius: .4em;

        background: #FFFFFF;
        box-shadow: 2px 2px 4px 4px rgba(186, 186, 186, 186);

        margin-top: -2em;
        padding: 1.5em 3em 1.5em 1.5em;
        
    }

    .simulacao{

    }

    .titulo{
        margin-bottom: .5em;
    }

    input{
        border-radius: .4em;
        opacity: 36%;

        padding: 1em;
        margin: .5em 1.5em 0em 0em;

        margin-bottom: -4em;
    }

    .simulacao > button{
        padding: 1em;

        border: none;
        border-radius: .3em;

        background-color: #1282A2;
        color: white;
    }

    .formas-pagamento{

    }

    .titulo2{
        margin-top: 1.4em;
    }

    .pagamento{
        display: flex;
        flex-direction: row;

        margin: 2em 0em 1em 0em;
    }

    .pagamento > img{
        height: 38px;

        margin-right: .8em;
    }

    .texto-pagamento{
        
    }

    .cupom{
        display: flex;
        flex-direction: row;

        justify-content: center;
        align-items: center;

        width: 21em;
        height: 6em;

        margin: 2.5em 0em;
        padding: 1.5em 1.5em 1em 0em;

        background-color: #F9F9F9;
    }

    .cupom > img{
        margin: 0em .8em 0em .4em;

        height: 38px;
    }

    .texto-cupom{
        font-size: 14px;
    }

    .formas-pagamento > button{
        border: none;
        border-radius: .3em;

        width: 25em; 
        height: 4em;

        background-color: #1282A2;
        color: white;

        padding: 1em 5em;
    }

    .security{
        display: flex;
        flex-direction: row;

        justify-content: center;
        align-items: center;
        
        margin-top: 2.5em;
    }

    .security > img{
        height: 35px;

        margin-left: 1em;
    }

    .texto-security{
        
    }
`

export { Container, Conteudo}