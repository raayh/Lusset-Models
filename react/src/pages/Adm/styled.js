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
.tabelas_input{
    padding: 0em 2em;
}
.box-cadastrar{
    display: flex;
    flex-direction: column;
    width: 100%;
  
    background: #FFFFFF;
    box-shadow: 0px 0px 4px 1px rgba(186, 186, 186, 0.25);
    padding: 1.5em 0em;
    margin-top: 40px;
    margin-bottom: 2em;
}
.titulo{
    display:flex;
    flex-direction: row;
    font-weight: 700;
    font-size: 32px;
    justify-content: flex-start;
    align-items: center;
    margin: 36px 70px;
    
}
.container-form{
    display:flex;
    flex-direction: row;
    flex-wrap: wrap;
                        
} 
.form{
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-bottom: 20px;
}
.form-maior{
    display: flex;
    flex-direction: row;
}
.form-maior > input{
   width: 644.5px ! important;
   margin-bottom: 20px;
}
.form-maior > textarea{
    width:  644.5px;
    height: 7em;
    resize: none;
}
.container-form div:nth-child(1)
{
    margin-left: 25px;
}
.container-form div:nth-child(8){
    margin-left: 44px;
}
.container-form div:nth-child(2), 
.container-form div:nth-child(4),
.container-form div:nth-child(6)
 {
    padding-left: 78px;
}
.container-form div:nth-child(2){
    padding-left: 85px;
}
.container-form div:nth-child(6){
    padding-left: 68px;
}
.container-form div:nth-child(1), 
.container-form div:nth-child(3),
.container-form div:nth-child(5)
 {
    padding-left: 40px;
}
.label{
    padding-right: 8px;
    
    font-family: 'Roboto', sans-serif;
    color: #615858;
}
.input{                       
    width: 209px;
    height: 36px;
    border: 1px solid #A8A8A8;
    box-sizing: border-box;
    border-radius: 5px;
}
.btn-cadastrar{
    background: #119FDC;
    border-radius: 44px;
    border: none;
    color: white;
    font-family: 'Roboto', sans-serif;
    width: 106px;
    height: 36px;
    margin-left: 25px;
    margin-top: 58px;
}
.box-cadastrados{
    margin-top: 46px;
    width: 100%;
 
    background: #FFFFFF;
    box-shadow: 0px 0px 4px 1px rgba(186, 186, 186, 0.25);
    padding: 32px 43px;
}
.tabela{
    border-collapse: collapse;
}
table {
    margin-top: 2em;
}
thead {
    background-color: #119FDC;                   
}
th {
    height: 61.93px;
    text-align: left;
    padding: 1em;
    color: #ffff;
    font-weight: 800;
} 
tbody {
    background-color: #F5F5F5;
}
.linha-alternada{
    background: #fff;
}
.imagem-table img{
    width: 47px;
    height: 47px;
    border-radius: 50px;
}
td button {
    border-radius: 50%;
    background-color: #565656;
    border: none;
    width: 31px;
    height: 31px;
}
td {
    text-align: left;
    height:  61.93px;
    padding: 1em;
    color: #6D6868;
    font-weight: 600;
}   
            
.campo-acao {
    width: .1em;
}
.campo-acao > button {
    visibility: hidden;
    }
    
    tr:hover{
    
        .campo-acao > button {
            visibility: visible;
        }
    
    }
.barra2{
    width: 30px;
    height: 0px;
                            
    border: 4px solid #119FDC;;
    border-radius: 8px;
    transform: rotate(-90deg);
}
`

export { Container, Conteudo }