import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    flex-direction: column;

    position: sticky;
    top:0px;

    width: 356px;
    height: 100vh;

    color: white ;
    background: #1282A2; 

    font-family: 'Montserrat', sans-serif;

    .logo {
      display: flex;
      flex-direction: row;

      justify-content: center;

      padding: 35px 116px 49px 35px;

      background-color: #001F54;
    }

    .texto-logo{
        font-weight: 700;
        font-size: 28px;

        text-align: center;

        padding-left: 30px;
    }

    .bloco-vazio {
        height: 76px;

        background-color: #034078;
    }

    .bloco-vazio2{
        height: 76px;

        background-color: #1282A2;
    }

    .menu-produtos{
        display: flex;
        flex-direction: row;

        align-items: center;

        padding: 25px 22px 20px 65px;

        
        color: black;

        font-weight: 500;
        font-size: 18px;
        color: #1A1A1A;
    }

    // .linha{
    //     border: 1px solid black;
    //     opacity: 30%;
    // }

     .imagem{
        height: 38;
        width: 30;

        padding-right: 15px;
    }

    .menu-info{
        display: flex;
        flex-direction: row;

        align-items: center;
        padding: 25px 22px 25px 65px;

        font-weight: 500;
        font-size: 18px;
        background-color: white;
    }

    .texto-aluno{
        color: black;
    }
    
    // .barra {
    //     display: flex;
    //     flex-direction: row;

    //     justify-content: flex-start;

    //     width: 4px;
    //     height: 68px;
        
    //     background: #1282A2;
    // }
`

export {Container};