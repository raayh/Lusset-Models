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

    .box{
        display: flex;
        flex-direction: row;

        min-width: 675px;
      
        background: #FFFFFF;
        box-shadow: 0px 0px 4px 1px rgba(186, 186, 186, 0.25);
    
        margin: 150px 80px 120px 50px;

        padding: 2em;
    }

    .box-esquerda{
        display: flex;
        flex-direction: row;
    }

    .barra-esquerda{
        display: flex;
        flex-direction: row;

        justify-content: flex-start;

        width: 4px;
        height: 20em;

        border: 2px solid #1282A2
    
    }

    .conteudo-esquerda{
        display: flex;
        flex-direction: column;

        padding: .5em 0em 0em 5.5em;
    }

    .titulo-conteudo{
        display: flex;
        justify-content: center;
    }

    .titulo-conteudo:hover{
        cursor: context-menu;
    }

    .perfil{
        display: flex;
        flex-direction: column;
        
        text-align: center;

        padding-top: 50px;
    }

    .texto-perfil{
        font-size: .7em;
    }

    .texto-perfil:hover{
        cursor: context-menu;
    }

     .image{
        padding-bottom: 1em;
     }

    .rodape{
        display: flex;
        flex-direction: row;

        padding-top: 2em;
    }

     .texto{
         display: flex;
         text-align: center;

         padding-top: .2em;

         font-size: 1em;
     }

    .barra-rodape{
        width: .5px;
        height: 2.5em;

        background: #000000; 
        opacity: 36%;

        margin: 0em 1em 0em 1em; 
    }

    .box-direita{
        display: flex;
        flex-direction: row;

       padding-top: 5em;
    }

    .barra-direita{
        width: .5px;
        height: 9em;

        background: #000000; 
        opacity: 36%;

        margin: 0em 5em 0em 1em; 

        margin-left: 13em
    }

    .conteudo-direita{
        display: flex;
        flex-direction: column;
    }

    .titulo-direita{
        display: flex;
        flex-direction: column;
    }

    .titulo-direita:hover{
        cursor: context-menu;
    }

    .barra-titulo{
        margin: .5em 0em 1.5em 0em;

        width: 1.5em;
        border: .5px solid #1282A2
    }

    .texto-imagem{
        opacity: 20%;

        font-size: .9em;
    }

    .texto-imagem:hover{
        cursor: context-menu;
    }

    .texto{
        border: none;
        background-color: white;
    }

    .texto:hover{
        color: #1282A2;
        cursor: pointer;
    }

    
    .rota{
        font-family: 'Montserrat', sans-serif;
        font-size: .8em; 

        color: white;

        border: none;
        border-radius: 1em;

        width: 11em;
        heigth: 1em;

        padding: .5em;

        margin: 3em 0em 0em 5em;

        background-color: #1282A2;
    }

    .rota:hover{
        cursor: pointer;

        background-color: #001F54;
    }


`

export { Container, Conteudo }