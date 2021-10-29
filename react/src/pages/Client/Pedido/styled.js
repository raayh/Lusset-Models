import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    flex-direction: row;
    min-width: 100%;
    height: 100%;
    
    font-family: 'Montserrat', sans-serif;
` 

const Conteudo = styled.div`
    display: flex;
    flex-direction: column;

    width: 100%;

    background: #F5F5F5;

    .container-box{
        display: flex;
        flex-direction: column;

        min-width: 675px;
    
        background: #FFFFFF;
        box-shadow: 2px 2px 15px 7px rgba(186, 186, 186, 186);

        margin: 40px 80px 120px 50px;

        padding: 2em;
    }

    .titulo{
        display: flex;
        flex-direction: column;
    }

    .barra-titulo{
        margin: .5em 0em 1.5em .7em;

        width: 3em;
        
        border: 1px solid #1282A2;
        border-radius: .4em;
    }

    .box{
        display: flex;
        flex-direction: row;

        width: 700px;

        border: 2px solid black;
        border-radius: .4em;        
        
        margin: 1em;
        padding: 1.5em;

        box-shadow: 0px 0px 4px 1px rgba(186, 186, 186, 0.25);  
    }

    .cabecalho{
        display: flex;
        flex-direction: column;
    }

    .barra{
        border: 1px solid black;
        opacity: 30%;

        margin: .5em 0em .5em 0em;
        width: 100%;
    }

    .detalhe-roupa{
        display: flex;
        flex-direction: row;

        align-items: center;
    }

    .detalhe-roupa > img {
        width: 4em;
    }

    .texto-roupa{
        font-size: .8em;

        padding: .5em;
    }

    .preco-roupa{
        padding-top: 4em;

        font-size: .8em;
    }

    .barra2{
        width: 2px;
        height: 100%;

        background: #000000; 
        opacity: 36%;

        margin: 0em 1em 0em 1em; 
    }

    .status-roupa{
        padding-left: 1em;
    }

    .titulo-status{

    }

    .texto-status{

    }

    .barra-status{
        border: 1px solid #1282A2;
        border-radius: .4em;

        margin: .2em 0em 0em .3em;

        width: 2em;
        
    }

    .texto{
        font-size: .9em;

        padding: .5em 0em .5em 0em;
    }

    .texto > span{
        color: #1282A2;

        font-weight: bold;
    }

    .status-roupa > button{
        font-family: 'Montserrat', sans-serif;
        font-size: .8em; 
       
        border: none;
        border-radius: 1em;

        width: 9em;
        heigth: 1em;
        
        padding: .5em;

        background-color: #1282A2;
        color: white;

    }

`

export {Container, Conteudo}