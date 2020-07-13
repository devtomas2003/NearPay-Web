import React from 'react';

import { BrowserRouter, Route, Switch } from 'react-router-dom';
import HomePage from './components/HomePage/Layout';

export default function Routes(){
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={HomePage} />
                <Route component={() => <h1>Erro</h1>} />
            </Switch>
        </BrowserRouter>
    );
}