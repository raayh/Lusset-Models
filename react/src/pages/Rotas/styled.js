import styled from 'styled-components'

const Container = styled.div`
    display: flex;
    flex-direction: column;

    justify-content: space-between;
    
    min-width: 100vh;
    height: 100vh;
    
    font-family: 'Montserrat', sans-serif;

    button{
        font-family: 'Montserrat', sans-serif;
        font-size: .8em; 
       
        border: none;
        border-radius: 1em;

        width: 9em;
        height: 1em;
        
        padding: 1em;

        background-color: #1282A2;
        color: white;
    }

`

export {Container};