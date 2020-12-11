
import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

import Product from './Components/product/product'

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/product" component={Product} />
            </Switch>
        </BrowserRouter>
    );
}