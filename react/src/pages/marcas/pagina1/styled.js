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
    
    
    
    .conteudo-marca{
        display: flex;
        flex-direction: column;
    }
    
    .box{
        display: flex;
        flex-direction: row;
    
        width: 100%;
        
        margin: 30px 0px 30px 0px;
    }
    
    
    .box2{
        display: flex;
        flex-direction:row-reverse;
        
    
        margin: 30px 0px 30px 0px;
    
        
        width: 100%;
    }
    
    .box3{
        display: flex;
        flex-direction: row;
    
        margin: 30px 0px 30px 0px;
        
        width: 50%;
    }
    
    .box4{
        display: flex;
        flex-direction: row-reverse;
    
        margin: 30px 0px 30px 0px;
    
        width: 100%;
    }
    
    .box5{
        display: flex;
        flex-direction: row;
        
        margin: 30px 0px 30px 0px;
    
        width: 50%;
    }
    
    .imagem img{
        height: 231px;
        
    }
    .imagem4 img{
        height: 249px;
        
    }
    
    .dois{
        margin: -120px 0px 0px 110px;
    }
    
    .desc{
        color:white;
        font-family: NotoSerif-Bold;
    }
    
    button {
        transition-duration: 0.4s;
    
        border: none;
        border-radius: 4px;
    
        background-color: black;
        color: white;
    
        text-align: center;
        text-decoration: none;
    
        display: inline-block;
        font-size: 12px;
    
        padding: 8px 20px 8px 20px;
    }
      
    button:hover {
        background-color: white; 
        color: black;
    }
    
    
    .texto{
        color: white;
    
        background-color: #1282A2;
    
        
        align-items: center;
    
        padding: 60px 20px 45px 20px;
    
        max-width: 400px;
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
`

export {Container}