import {Container} from "./styled";

import 'react-multi-carousel/lib/styles.css'

// import Api from '../../../service/api';
// const api = new Api();

export default function Login () {
    return(
    <Container>    
            <div class="cabecalho">
              <div class="titulo"><h1>LUSETT</h1></div>
              <div class="subtitulo">
                <h2>Em compras a partir de R$300,00</h2>
                <h3>FRETE GRÁTIS</h3>
              </div>
            </div>

            <div class="tela-login">
              <div class="text-base1">
                <div class="bonequim"><img src="/assets/images/boneco.png" /></div>
                <div class="welcome">Seja Bem-Vindo(a)!</div>
              </div>
              <form>
                <div class="login-text">
                  <div class="email">Insira seu e-mail ou CPF</div>
                  <input type="text" id="email" class="form-input" required />
                </div>
                <div class="login-text">
                  <div class="senha">Insira sua senha</div>
                  <input type="password" id="senha" class="form-input" required />
                </div>
                <div class="botões">
                  <div class="criar">Criar conta</div>
                  <button>Entrar</button>
                </div>
              </form>
            </div>
    </Container>
      );
}

