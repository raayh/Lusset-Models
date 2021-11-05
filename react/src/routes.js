
import {BrowserRouter, Switch, Route} from 'react-router-dom'

import "./index.css";
import Cliente from './pages/Client'
import Pedido from './pages/Client/Pedido'
import Cart from './pages/Cart/cart'
import CartVazio from './pages/Cart/CartVazio/index'
import Admin from './pages/Adm/index'
import Home from "../src/pages/home/index";
import DetalhesProduto from "../src/pages/detalhes roupa/index";
import PagamentoInfo from "../src/pages/pagamento-info/index";
import PagamentoFrete from "./pages/pagamento-frete";
import Marcas from "./pages/marcas/pagina1/index";
import Marcas2 from "./pages/marcas/pagina2/index";
import Calcados from "./pages/marcas/pagina1/index";
import Calcados2 from "./pages/marcas/pagina2/index";
import Roupas from "./pages/marcas/pagina1/index";
import Roupas2 from "./pages/marcas/pagina2/index";

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch> 
                <Route path="/" exact={true} component={Home} />
                <Route path="/Cliente" exact={true} component={Cliente} />
                <Route path="/pedido" exact={true} component={Pedido} />
                <Route path="/carrinho" exact={true} component={Cart} />
                <Route path="/carrinho_vazio" exact={true} component={CartVazio} />
                <Route path="/admin" exact={true} component={Admin} />                
                <Route path="/DetalhesProduto" component={DetalhesProduto} />
                <Route path="/PagamentoInfo" component={PagamentoInfo} />
                <Route path="/PagamentoFrete" component={PagamentoFrete} />
                <Route path="/marcas" component={Marcas} />
                <Route path="/marcas2" component={Marcas2} />
                <Route path="/calcados" component={Calcados} />
                <Route path="/calcados2" component={Calcados2} />
                <Route path="/roupas" component={Roupas} />
                <Route path="/roupas2" component={Roupas2} />
            </Switch>
        </BrowserRouter>
    )
} 