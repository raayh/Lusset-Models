import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    text-align: center;

  .img-produto img {
    width: 11em;
    height: 11em;
  }

  
  .descricao,
  .valor {
    color: #1282a2;
    margin: 0.4em;
    font-size: 1em;
  }

  .detalhes {
    align-items: flex-end;
    color: white;
    font-size: 1em;

    background-color: #1282a2;
    padding: 0.5em;
    margin-top: 1em;
    border-radius: 0.2em;
    width: 70%;
    align-items: flex-end;
    border-color: white;
  }


`;
