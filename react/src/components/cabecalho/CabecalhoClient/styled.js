import styled from 'styled-components'

const Container = styled.div`
   display: flex;
   flex-direction: row;

   justify-content: space-between;

   width: 100%;
   height: 5em;
    
   background:  #001F54;
   box-shadow: 0px 0px 4px 1px rgba(186, 186, 186, 0.25);

 .cabecalho-esquerda{
    display: flex;
    flex-direction: row;

    align-items: center; 
    
    color: white;
 }
 
.texto{
   display: flex;
   flex-direction: row;

   border: none;
   background-color:  #001F54;
   
   align-items: center;
} 

button{
   font-family: 'Montserrat', sans-serif;
   font-size: 1em; 

   color: white;

   border: none;

   background-color: #001F54;
}

button:hover{
   cursor: pointer;
}
`
 

export {Container} 