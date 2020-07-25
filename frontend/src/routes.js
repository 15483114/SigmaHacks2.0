import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Main from './pages/Main';
import Join from './pages/Join';
import Profile from './pages/Profile';
import Schedule from './pages/Schedule';
export default function Routes(){
    return (
        <BrowserRouter>
        <Switch>
            <Route path='/' exact component={Main}/>
            <Route path='/join'component={Join}/>
            <Route path='/profile'component={Profile}/>
            <Route path='/schedule'component={Schedule}/>
        </Switch>
        </BrowserRouter>
    )
}