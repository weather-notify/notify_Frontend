import React from 'react';
import { Route, Switch } from 'react-router-dom';

import MainContainer from 'container/mainContainer/MainContainer'

const MainRouter = () => {
    return (
        <Switch>
            <Route exact path='/' component={MainContainer}/>
        </Switch>
    )
}

export default MainRouter;