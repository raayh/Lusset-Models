import styled from "styled-components";

const Container = styled.div`
.subtitulo h2 {
    position: absolute;
    top: 8px;
    right: 16px;
    font-size: 18px;
  }
  
  .subtitulo h3 {
    color: #009999;
    position: absolute;
    top: 26px;
    right: 16px;
    font-size: 18px;
  }
  
  .dados {
    height: 90%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  label {
    display: block;
    text-transform: capitalize;
    font-size: 1.5rem;
  }
  form {
    width: 100%;
    max-width: 700px;
    margin: 0 auto;
    padding: 0 2%;
  }
  .form-group.divide {
    width: 100%;
    display: flex;
    justify-content: space-between;
  }
  .form-group.divide .form-single {
    width: 48%;
    margin-right: 2%;
  }
  .form-group.divide .form-single:nth-of-type(2) {
    margin: 0;
  }
  .form-group {
    margin: 10px 0;
  }
  input,
  select {
    width: 100%;
    height: 50px;
    border-radius: 10px;
    padding: 10px;
    border: 0;
    outline: none;
    font-size: 1rem;
  }
  select,
  select option {
    font-weight: bold;
  }
  .final input,
  .final select {
    width: 100%;
    height: 35px;
    border-radius: 0px;
  }
  
  .form-group .form-single.check {
    display: flex;
    align-items: center;
  }
  
  .form-group .form-single.check label {
    display: inline;
  }
  .form-group .form-single.check input[type="checkbox"] {
    width: 50px;
  }
  .form-group:last-of-type .form-single {
    margin: 0;
    font-size: 1.1rem;
  }
  .form-group:last-of-type .form-single input[type="button"] {
    width: 100%;
    height: 100%;
    border-radius: 10px;
    font-size: 1.3rem;
  }

`