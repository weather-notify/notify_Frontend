import React from 'react';
import { Route, Switch } from 'react-router-dom';

import MainPage from 'page/main/MainPage';
import JoinPage from 'page/join/JoinPage';

const MainRouter = () => {
    return (
        <Switch>
            <Route exact path='/' component={MainPage} />
            <Route path='/join' component={JoinPage} />
        </Switch>
    )
}

export default MainRouter;