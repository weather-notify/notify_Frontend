import React from 'react';
import { Route, Switch } from 'react-router-dom';

import MainPage from 'page/main/MainPage';

const MainRouter = () => {
    return (
        <Switch>
            <Route exact path='/' component={MainPage}/>
        </Switch>
    )
}

export default MainRouter;