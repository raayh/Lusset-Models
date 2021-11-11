import { Container } from "./styled";
import Cabecalho from "../../../components/cabecalho/index";
import Rodape from "../../../components/rodape/index";
import 'react-multi-carousel/lib/styles.css'

// import Api from '../../../service/api';
// const api = new Api();

export default function Cadastrar(){
    return(
        <Container> 
            <Cabecalho> </Cabecalho>
            
        <div className="subtitulo">
          <h2>Em compras a partir de R$300,00</h2>
          <h3>FRETE GRÁTIS</h3>
      </div>
    <div className="dados">
      <form>
        <h1>Insira seus Dados</h1>

        <div className="form-group divide">
          <div className="form-single">
            <label for="name">nome</label>
            <input type="text" id="name" className="form-input" required name="name"/>
          </div>
          <div className="form-single">
            <label for="lastname">sobrenome</label>
            <input type="text" id="lastname" className="form-input" required name="lastname"/>
          </div>
        </div>

        <div className="form-group">
          <div className="form-single">
            <label for="emailregistro">Email</label>
            <input type="email" id="emairegistro" className="form-input" required name="email"/>
          </div>
        </div>

        <div className="form-group divide">
          <div className="form-single">
            <label for="datanasci">Daata de Nascimento</label>
            <input type="date" id="datanasci" className="form-input" required />
          </div>
          <div className="form-single">
            <label for="generoinfo">Gênero</label>
            <select name="generoinfo" id="genero">
              <option value="masc">Masculino</option>
              <option value="femin">Feminino</option>
              <option value="nobi">Não binario</option>
            </select>
          </div>
        </div>

        <div className="form-group divide">
          <div className="form-single">
            <label for="cpf">cpf</label>
            <input type="number" id="cpf" className="form-input" required name="cpf"/>
          </div>
          <div className="form-single">
            <label for="telefone">telefone</label>
            <input type="number" id="telefone" className="form-input" required name="tel"/>
          </div>
        </div>

        <div className="form-group">
          <div className="form-single">
            <label for="senha">coloque sua senha</label>
            <input type="password" id="senha" className="form-input" required name="senha"/>
          </div>
        </div>

        <div className="form-group final">
          <div className="form-single check">
            <input type="checkbox" id="confirmar" className="form-input" required name="receberPromo"/>
            <label for="confirmar">Receber promoções em seu email</label>
          </div>
        </div>

        <div className="form-group final divide">
          <div className="form-single">
            <p>Ao criar uma conta você está de acordo com nossa<br/>política de privacidade.</p>
          </div>
          <div className="form-single">
            <input type="button" id="finalizar" className="form-input" value="Enviar"/>
          </div>

        </div>
      </form>


    </div>

     </Container>
           
    );
}   