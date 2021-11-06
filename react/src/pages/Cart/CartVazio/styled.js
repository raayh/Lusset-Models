import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    flex-direction: row;
    
    min-width: 100vh;
    height: 100vh;
    
    font-family: 'Montserrat', sans-serif;
` 

const CarrinhoVazio = styled.div`
    display: flex;
    flex-direction: row;

.vazios{
    display: flex;
    flex-direction: row;

    position: sticky;
}

.box-vazia1{
    width: 14em;
    height:100%;

    background-color: #001F54;
}

.box-vazia2{
    width: 14em;
    height:100%;

    background-color:#034078;

    box-shadow: 0px 4px 4px 4px rgba(0, 0, 0, 0.25);
}

.box-vazia3{
    width: 14em;
    height:100%;

    background-color: #1282A2;

    box-shadow: 0px 4px 4px 4px rgba(0, 0, 0, 0.25);
}

.box{
    display: flex;
    flex-direction: column;

    position: relative;

    background-color: #FFFFFF;

    justify-content: center;
    align-items: center;

    width: 50em;
    height: 20em;

    margin: 10em 0em 10em -18em;

    box-shadow: 0px 2px 4px 4px rgba(0, 0, 0, 0.25);
}

.titulo{
    text-align: center;
}

.titulo > span{
    font-weight: bolder;
    color: #1282A2;
}


.subtitulo{
    width: 40em;

    margin: 2em 0em 2em 0em;

    text-align: center;
}

.pesquisa{
    display: flex;
    flex-direction: row;
}

input{   
    width: 25em; 
    height: 4em;
}

 button{
    height: 4em;

    padding: 1em;

    border: none;
    border-radius: .3em;

    background-color: #1282A2;
    color: white;
}

.rodapé{
    display: flex;
    flex-direction: row;

    align-items: center;

    margin-top: 2em;
}

.rota{
    color:black;

    text-decoration: none;
}

img{
    color: #C4C4C4;
}



`

export { Container ,CarrinhoVazio}