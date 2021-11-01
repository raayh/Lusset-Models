import { Container } from "./styled";
import RetanguloPagamento from "../../components/retangulo-pagamento/index";
import Retangulo from "../../unused-components/index";

export default function PagamentoInfo() {
  return (
    <Container>
      <Retangulo></Retangulo>
      <RetanguloPagamento></RetanguloPagamento>
    </Container>
  );
}
