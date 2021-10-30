
import {BrowserRouter, Switch, Route} from 'react-router-dom'

import "./index.css";
import Cliente from './pages/Client'
import Pedido from './pages/Client/Pedido'
import Cart from './pages/Cart/cart'
import Home from "../src/pages/home/index";
import DetalhesProduto from "../src/pages/detalhes roupa/index";
import PagamentoInfo from "../src/pages/pagamento-info/index";
import PagamentoFrete from "./pages/pagamento-frete";

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch> 
                <Route path="/" exact={true} component={Home} />
                <Route path="/Cliente" exact={true} component={Cliente} />
                <Route path="/pedido" exact={true} component={Pedido} />
                <Route path="/carrinho" exact={true} component={Cart} />
                <Route path="/DetalhesProduto" component={DetalhesProduto} />
                <Route path="/PagamentoInfo" component={PagamentoInfo} />
                <Route path="/PagamentoFrete" component={PagamentoFrete} />
            </Switch>
        </BrowserRouter>
    )
} 