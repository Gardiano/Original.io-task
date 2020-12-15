
import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

import Home from './Components/home/home';
import Product from './Components/product/product';
import Erro from './Components/error/error';

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/Home" component={Home} />
                <Route exact path="/Poduct" component={Product} />
                <Route path="*" component={Erro} />
            </Switch>
        </BrowserRouter>
    );
}