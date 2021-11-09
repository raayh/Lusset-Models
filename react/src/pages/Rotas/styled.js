import styled from 'styled-components'

const Container = styled.div`
    display: flex;
    flex-direction: column;

    padding: 2em;

    align-items: center;
    
    min-width: 100vh;
    height: 100vh;
    
    font-family: 'Montserrat', sans-serif;

    button{
        display: flex;
        align-items: center;
    
        font-family: 'Montserrat', sans-serif;
        font-size: .8em;

        justify-content: center;
       
        border: none;
        border-radius: 1.5em;

        width: 12em;
        // height: 5em;
        
        padding: .8em;

        margin-bottom: 1em;

        background-color: #1282A2;
        color: white;
    }

    ` 
export {Container}