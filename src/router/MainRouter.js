import React from 'react';
import { Route, Switch } from 'react-router-dom';

import MainPage from 'page/main/MainPage';
import JoinPage from 'page/join/JoinPage';
import LoginPage from 'page/login/LoginPage';

const MainRouter = () => {
    return (
        <Switch>
            <Route exact path='/' component={MainPage} />
            <Route path='/join' component={JoinPage} />
            <Route path='/login' component={LoginPage} />
        </Switch>
    )
}

export default MainRouter;