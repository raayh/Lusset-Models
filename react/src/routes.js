import {BrowserRouter, Switch, Route} from 'react-router-dom'

import Cliente from './pages/Client'

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch> 
                <Route path="/cliente" exact={true} component={Cliente} />
            </Switch>
        </BrowserRouter>
    )
} 