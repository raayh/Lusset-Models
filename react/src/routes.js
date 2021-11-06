
import {BrowserRouter, Switch, Route} from 'react-router-dom'

import "./index.css";
import TelaRotas from './pages/Rotas/index'
import Acessorios from './pages/Acessorios'
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
import Pagamento from './pages/pagamento/index';
import Login from './pages/login';

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch> 
                <Routes path="/" exact={true} component={TelaRotas} /> 
                <Route path="/login" exact={true} component={Login} />
                <Route path="/home" exact={true} component={Home} />
                <Route path="/Cliente" exact={true} component={Cliente} />
                <Route path="/pedido" exact={true} component={Pedido} />
                <Route path="/carrinho" exact={true} component={Cart} />
                <Route path="/carrinho_vazio" exact={true} component={CartVazio} />
                <Route path="/admin" exact={true} component={Admin} />                
                <Route path="/DetalhesProduto" exact={true} component={DetalhesProduto} />
                <Route path="/PagamentoInfo" exact={true} component={PagamentoInfo} />
                <Route path="/PagamentoFrete" exact={true} component={PagamentoFrete} />
                <Route path="/Pagamento" exact={true} component={Pagamento} />
                <Route path="/marcas" exact={true} component={Marcas} />
                <Route path="/marcas2" exact={true} component={Marcas2} />
                <Route path="/calcados" exact={true} component={Calcados} />
                <Route path="/calcados2" exact={true} component={Calcados2} />
                <Route path="/roupas" exact={true} component={Roupas} />
                <Route path="/roupas2" exact={true} component={Roupas2} />
                <Route path="/acessorios" exact={true} component={Acessorios} />

            </Switch>
        </BrowserRouter>
    )
} 