import styled from "styled-components";

const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 41.1em;
    background-image: url("https://images5.alphacoders.com/805/805185.jpg");
    background-size: 84em;
    background-repeat: no-repeat;
    color: white;
    
    .cabecalho {
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: 10%;
    }

    .titulo {
        margin-left: 2em;
    }

    .bonequim img {
        margin-bottom: 0.2em;
        width: 3em;
    }

    .welcome {
        margin-bottom: 2em;
        font-size: 2em;
    }
    .tela-login {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        width: 100%;
        height: 100%;
        margin-bottom: 4em;
        margin-top: -3em;
    }

    .text-base1 {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }

    .subtitulo > h2{
        position: absolute;
        top: 8px;
        right: 16px;
        font-size: 18px;
    }

    .subtitulo > h3{
        color: #009999;
        position: absolute;
        top: 26px;
        right: 16px;
        font-size: 18px;
    }

    .botões {
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    .form-input {
        width: 280px;
        height: 40px;
        margin-bottom: 2em;
        margin-top: 0.5em;
    }

    .botões button {
        color: white;
        font-size: 1em;
    
        background-color: rgb(24, 109, 115);
        padding: 0.5em;
        border-radius: 0.3em;
        margin-top: 0.3em;
        width: 35%;
        border: rgb(24, 75, 115);
    }

    .criar {
        font-size: 1.2em;
        margin-top: 0.1em;
    }
`

export {Container}
