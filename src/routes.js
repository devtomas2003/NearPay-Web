import React from 'react';

import { BrowserRouter, Route, Switch } from 'react-router-dom';
import HomePage from './components/HomePage/Layout';
import Error404 from './components/404Error/Layout';

export default function Routes(){
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={HomePage} />
                <Route component={Error404} />
            </Switch>
        </BrowserRouter>
    );
}