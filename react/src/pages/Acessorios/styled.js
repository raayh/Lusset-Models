import styled from "styled-components";

const Container = styled.div`
    margin: 0px;

    display: flex;
    flex-direction: column;

    background-color: #ffffff; 
    color: white;

.cabecalho{
    display: flex;
    flex-direction: column;
    background-color: #001F54;
    color: white;
    
}

.texto-cabecalho {
    font-family: NotoSerif-Regular;
    font-size: 1.5em;
}

.lusett {
    font-size: 4em;
    font-family: NotoSerif-Regular;
    text-shadow: 0.1em 0.1em 0.05em #1282A2;
}
.cima {
    display: flex;
    flex-direction: row;
    margin: 1.2em;
    justify-content: space-between;
}

.baixo {
    display: flex;
    flex-direction: row;
    margin: 0.6em 5em 2em 5em;
    justify-content: space-between;
}

.cabecalho img {
    max-width: 2em;
    width: auto;
}

.icone-lupa {
    margin-left: 50px;
    margin-right: -70px;
}

.superior{
    padding-top: 10px;
    padding-left: 555px;
    

    color: black;
    height: 1em;
    width: 100;

    font-weight: bold;
    align-items: center;

    font-size: 1.6em;
    font-family: NotoSerif-Regular;

}

.linha{
    padding-left: 150px;
    padding-bottom: 50px;
}

.conteudo-principal{
    display: flex;
    flex-direction: row;

    font-size: 1em;
    font-family: NotoSerif-Regular;
    
    margin: 0px;
}

.lateral-tudo{
    display: flex;
    flex-direction: column;
}

.lateral{
    align-items: center;
    font-size: 16px;

    padding-left: 1.5em;
}

.lateral-baixo{
    align-items: center;
    font-size: 16px;

    padding-top: 1em;
    padding-left: 1.5em;
}

.item-L{
    color: black;

    
}

.item-L-x{
    color: #1282A2;

    white-space: nowrap;
    width: 100px;
    border: 1px solid #1282A2;
    overflow: hidden;
    text-overflow: clip;
}

.item-L-X{
    color: black;
    padding-left: 10px;
}

.item-L-Baixo{
    border-bottom: 2.5px solid #1282A2;
    color: black;
}




.catalogo{
    display: flex;
    flex-direction: column;

    width: 100%;
}



.encaixotado{
    display: flex;
    flex-direction: column;

}

.box{
    display: flex;
    flex-direction: row;
    
    justify-content: space-evenly;

        
    margin: 10px 10px 100px 10px;
}

.titulo-corpo{
    color: black;
    font-weight: bold;

    text-decoration-line: underline;
    font-size: 20px;

    margin: 0px 0px 0px 100px;
}
        */cima|direita|baixo|esquerda*/

.conteudo-corpo{
    display: flex;
    flex-direction: column;
}


.img{
    border-style: bold;
}

.descricao-item{
    color: #1282A2;
    
}

.preço-item{
    color: #1282A2;
    padding-left: 4em;
    padding-top: 0.5em;
}

.botão{
    padding-top: 1.5em;
}


button {
    transition-duration: 0.4s;
    border: none;
    border-radius: 10px;
    color: white;
    padding: 16px 70px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
}
  
button:hover {
    background-color: #1282A2; /* Green */
    color: black;
}



.roda-pe{
    display: flex;
    flex-direction: row;

    background-color: #001F54;
}

.conteudo-pe{
    color: #ffff;

    justify-content: space-evenly;

    width: 100%;

    font-size: 1.2em;
    padding-bottom: 5em;

    display: flex;
    flex-direction: row;

}

.texto1-P{
    padding-top: 5em;
}

.texto2-P{
    padding-top: 5em;
}

.texto3-P{
    padding-top: 5em;
}

.seleção{
    display: flex;
    flex-direction: row;

    justify-content: center;
    
    width: 100%;
}

select {
    width: 170px;
    height: 30px;

  border-radius: 10px;
  border-color: #1282A2;

  color: black;
}
`
export {Container}