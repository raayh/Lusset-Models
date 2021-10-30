import { Container } from "./styled";

export default function Retangulo() {
  return (
    <Container>
      <div className="quad1">
        <div className="lusett">LUSETT</div>
        <div className="etapas">
          <div className="etapa-azul">Carrinho {">"}</div>
          <div>Informações {">"}</div>
          <div>Frete {">"}</div>
          <div>Pagamento</div>
        </div>
        <div className="formulario">
          <div className="subtitulo">Informações de Contato</div>

          <input
            className="Email"
            type="text"
            name="name"
            id="name"
            placeholder="E-mail"
          />
          <form name="Enviar-novidades">
            <input
              className="boxestilo"
              type="checkbox"
              name="opcao"
              id="opcao"
              value="01"
            />
            <label for="opcao">
              Enviar novidades e ofertas para mim por e-mail
            </label>
          </form>

          <div className="subtitulo">Endereço para Entrega</div>
          <div className="Nome-e-Sobrenome">
            <input type="text" name="name" id="name" placeholder="Nome" />
            <input type="text" name="name" id="name" placeholder="Sobrenome" />
          </div>
          <div className="Telefone-e-CPF">
            <input
              className="conjuntos"
              type="text"
              name="name"
              id="name"
              placeholder="CPF ou CNPJ"
            />
            <input
              className="conjuntos"
              type="text"
              name="name"
              id="name"
              placeholder="Telefone"
            />
          </div>

          <input
            className="CEP"
            type="text"
            name="name"
            id="name"
            placeholder="CEP"
          />
          <input
            className="Endereco"
            type="text"
            name="name"
            id="name"
            placeholder="Endereço"
          />

          <div className="Bairro-e-Num">
            <input
              className="conjuntos"
              type="text"
              name="name"
              id="name"
              placeholder="Bairro"
            />
            <input
              className="conjuntos"
              type="text"
              name="name"
              id="name"
              placeholder="Nº"
            />
          </div>

          <input
            className="Complemento"
            type="text"
            name="name"
            id="name"
            placeholder="Complemento"
          />
          <input
            className="Cidade"
            type="text"
            name="name"
            id="name"
            placeholder="Cidade"
          />
          <div className="Pais-e-Estado">
            <div className="div-select">
              <select required>
                <option value="" disabled selected>
                  Pais...
                </option>
                <option value="Brasil">Brasil</option>
              </select>
            </div>
            <div className="div-select">
              <select required>
                <option value="estado" disabled selected>
                  Estado...
                </option>
                <option value="Acre">Acre</option>
                <option value="Alagoas">Alagoas</option>
                <option value="Amapá">Amapá</option>
                <option value="Amazonas">Amazonas</option>
                <option value="Bahia">Bahia</option>
                <option value="Ceará">Ceará</option>
                <option value="Distrito Federal">Distrito Federal</option>
                <option value="Espírito Santo">Espírito Santo</option>
                <option value="Goiás">Goiás</option>
                <option value="Maranhão">Maranhão</option>
                <option value="Mato Grosso">Mato Grosso</option>
                <option value="Mato Grosso do Sul">Mato Grosso do Sul</option>
                <option value="Minas Gerais">Minas Gerais</option>
                <option value="Pará">Pará</option>
                <option value="Paraíba">Paraíba</option>
                <option value="Paraná">Paraná</option>
                <option value="Pernambuco">Pernambuco</option>
                <option value="Piauí">Piauí</option>
                <option value="Rio de Janeiro">Rio de Janeiro</option>
                <option value="Rio Grande do Norte">Rio Grande do Norte</option>
                <option value="Rio Grande do Sul">Rio Grande do Sul</option>
                <option value="Rondônia">Rondônia</option>
                <option value="Roraima">Roraima</option>
                <option value="Santa Catarina">Santa Catarina</option>
                <option value="São Paulo">São Paulo</option>
                <option value="Sergipe">Sergipe</option>
                <option value="Tocantis">Tocantis</option>
              </select>
            </div>
          </div>

          <form name="salvar-informações">
            <input
              className="boxestilo"
              type="checkbox"
              name="opcao"
              id="check"
              value="01"
            />
            <label for="check">
              Salvar minhas informações para a proxíma vez
            </label>
          </form>

          <div className="decisoes-botoes">
            <div className="botao-continuar">
              <button className="continuar">Continuar com o frete</button>
            </div>
            <button className="voltar">Voltar para o frete</button>
          </div>
        </div>
      </div>
    </Container>
  );
}
