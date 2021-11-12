
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
import Roupas from "./pages/Roupas/pagina1/index";
import Roupas2 from "./pages/Roupas/pagina2/index";
import Login from './pages/login/index';
import Sobre from './pages/Sobre';
import Cadastrar from './pages/Registrar';

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch> 
                <Route path="/" component={TelaRotas} />
                <Route path="/login" exact={true} component={Login} />
                <Routes path="/cadastrar" exact={true} component={Cadastrar} /> 
                <Routes path="/home" exact={true} component={Home} /> 
                <Routes path="/sobre" exact={true} component={Sobre} />
                <Route path="/Cliente" exact={true} component={Cliente} />
                <Route path="/pedido" exact={true} component={Pedido} />
                <Route path="/carrinho" exact={true} component={Cart} />
                <Route path="/carrinho_vazio" exact={true} component={CartVazio} />
                <Route path="/admin" exact={true} component={Admin} />                
                <Route path="/DetalhesProduto" exact={true}  component={DetalhesProduto} />
                <Route path="/PagamentoInfo" exact={true}  component={PagamentoInfo} />
                <Route path="/PagamentoFrete"  exact={true} component={PagamentoFrete} />
                <Route path="/marcas"  exact={true} component={Marcas} />
                <Route path="/marcas2" exact={true}  component={Marcas2} />
                <Route path="/calcados" exact={true}  component={Calcados} />
                <Route path="/calcados2" exact={true}  component={Calcados2} />
                <Route path="/roupas" exact={true}  component={Roupas} />
                <Route path="/roupas2" exact={true}  component={Roupas2} />
                <Route path="/acessorios" exact={true}  component={Acessorios} />

            </Switch>
        </BrowserRouter>
    )
} 