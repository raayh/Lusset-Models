import {BrowserRouter, Switch, Route} from 'react-router-dom'

import Cliente from './pages/Client'
import Cart from './pages/Client/Cart/cart'

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch> 
                <Route path="/cliente" exact={true} component={Cliente} />
                <Route path="/carrinho" exact={true} component={Cart} />
            </Switch>
        </BrowserRouter>
    )
} 